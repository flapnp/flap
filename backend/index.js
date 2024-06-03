const express = require("express")
const mongoose = require('mongoose')
const multer = require("multer");
const cors =require("cors")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const UserModel = require('./models/users')
const ProductModel =require('./models/products')
const OrderModel = require('./models/order')
const CardModel = require('./models/cards')
const TestimonialModel = require('./models/testimonials')
const SupportModel = require('./models/supports')
const path = require('path');

const app = express()
app.use(express.json())
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET","POST", "DELETE","PUT"],
    credentials: true
}))
app.use(cookieParser())
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/testimonial-upload', express.static(path.join(__dirname, 'testimonial-upload')));

mongoose.connect('mongodb://localhost:27017/flap')

const verifyRole = (role) => {
    return (req, res, next) => {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({ error: "Unauthorized: Token missing" });
        } else {
            jwt.verify(token, "jwt-secret-key", (err, decoded) => {
                if (err) {
                    return res.status(401).json({ error: "Unauthorized: Invalid token" });
                } else {
                    if (decoded.role === role) {
                        next();
                    } else {
                        return res.status(403).json({ error: `Forbidden: Not ${role}` });
                    }
                }
            });
        }
    };
};


// Usage
app.get('/user', verifyRole('user'), (req, res) => {
    res.json("User Dashboard");
});

app.get('/admin', verifyRole('admin'), (req, res) => {
    res.json("Admin Dashboard");
});

app.get('/super-admin', verifyRole('super-admin'), (req, res) => {
    res.json("Super Admin Dashboard");
});
//login service
app.post('/login', (req, res)=>{
    const {email, password} =req.body;
    UserModel.findOne({email:email})
    .then(user=>{
        if(user){
            bcrypt.compare(password, user.password, (err, response)=>{
                if(response){
                    const token= jwt.sign({userId: user._id, 
                                            firstname : user.firstname,
                                            middlename: user.middlename,
                                            lastname : user.lastname,
                                            phone : user.phone,
                                            organization : user.organization,
                                            email: user.email,
                                            username: user.username, 
                                            role: user.role},
                                    "jwt-secret-key", {expiresIn: '1d'})
                    res.cookie('token', token)
                    res.cookie('uid', user.email)
                    return res.json({Status: "sucess", role: user.role, userId: user._id})
                }else{
                    return res.json("Incorrect password")
                }
            })
        } else{
            return res.json("no record Existed")
        }
    })
})

// Assuming UserModel is your Mongoose model for users

app.post('/signup', async (req, res) => {
  try {
    const { firstname, middlename, lastname, username, phone, organization, email, password } = req.body;

    // Check if the username already exists
    const existingUser = await UserModel.findOne({ username: username });

    if (existingUser) {
      // User already exists, send a 400 response with an error message
      return res.status(400).json({ error: 'Username already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = await UserModel.create({
      firstname,
      middlename,
      lastname,
      username,
      phone,
      organization,
      email,
      password: hashedPassword, // Store the hashed password
    });

    // Send a 201 response with success message and user data
    res.status(201).json({ status: 'Success', user: newUser });
  } catch (error) {
    console.error('Error in signup:', error);
    // Send a 500 response for any internal server errors
    res.status(500).json({ error: 'Internal server error' });
  }
});


// Route to update user's username if it doesn't exist already
app.put('/create-username/:userId', async (req, res) => {
    const userId = req.params.userId;
    const newUsername = req.body.username;
  
    try {
      // Find the user by userId
      const user = await UserModel.findById(userId);
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      // Check if the new username already exists
      const existingUser = await UserModel.findOne({ username: newUsername });
      if (existingUser) {
        return res.status(400).json({ error: 'Username already exists' });
      }
  
      // Update the user's username
      user.username = newUsername;
      await user.save();
  
      // Send updated user data as response
      res.json({ message: 'Username updated successfully. Please log out and login again for setting username completely', user });
    } catch (error) {
      console.error('Error updating username:', error);
      res.status(500).json({ error: 'Server error' });
    }
  });
  

// Logout route
app.get('/logout', (req, res) => {
    // Clear the token cookie
    res.clearCookie('token');
    res.clearCookie('uid');
    // Redirect the user or send a response as needed
    res.json({ message: 'Logout successful' });
});

app.get('/super-admin/admins', (req,res)=>{
    UserModel.find({ role: 'admin' })
    .then(admins=>res.json(admins))
    .catch(err=>res.json(err))
})

// Delete an admin by ID
app.delete('/super-admin/admins/:userId', (req, res) => {
    const userId = req.params.userId;
  
    UserModel.findOneAndDelete({ _id: userId })
      .then(user => {
        if (user) {
          res.json({ message: 'Admin deleted successfully' });
        } else {
          res.status(404).json({ error: 'Admin not found' });
        }
      })
      .catch(err => res.status(500).json({ error: 'Internal Server Error' }));
  });

  //create admin by super-admin
  //registration service
app.post('/super-admin/admins/create-admin', (req, res)=>{
    const {email, password} =req.body;
    const role = 'admin';
    bcrypt.hash(password, 10)
    .then(hash=>{
        UserModel.create({email, password: hash, role})
        .then(user =>res.json({status: "Sucess"}))
        .catch(err=>res.json(err))
    }).catch(err=>res.json(err))
})

//add product service
app.post('/admin/products/add-product/', (req, res)=>{
    const {product_name, product_icon, product_description, product_longdescription} =req.body;
   
        ProductModel.create({product_name, product_icon, product_description, product_longdescription})
        .then(product =>res.json({status: "Sucess"}))
        .catch(err=>res.json(err))
    
})

//get products by admin
app.get('/admin/products/', (req,res)=>{
    ProductModel.find()
    .then(products=>res.json(products))
    .catch(err=>res.json(err))
})

// Delete a product by ID
app.delete('/admin/products/:productId', (req, res) => {
    const productId = req.params.productId;
  
    ProductModel.findOneAndDelete({ _id: productId })
      .then(product => {
        if (product) {
          res.json({ message: 'Producr deleted successfully' });
        } else {
          res.status(404).json({ error: 'Product not found' });
        }
      })
      .catch(err => res.status(500).json({ error: 'Internal Server Error' }));
  });

//get products by user
app.get('/user/explore-products/', (req,res)=>{
    ProductModel.find()
    .then(products=>res.json(products))
    .catch(err=>res.json(err))
})
//get products by user by ID
app.get('/user/explore-products/details/:productId', (req, res) => {
    const productId = req.params.productId;
    console.log('Received request for product details. ProductId:', productId);
    ProductModel.findById(productId)
        .then(product => {
            if (product) {
                console.log('Product found:', product);
                res.json(product);
            } else {
                console.log('Product not found');
                res.status(404).json({ error: 'Product not found' });
            }
        })
        .catch(err => {
            console.error('Error fetching product:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        });
});

//order service
app.post('/user/explore-products/product-order', (req, res)=>{
    const {type,category,purpose,custom,userId} =req.body;
    OrderModel.create({type,category,purpose,custom,userId})
        .then(order =>res.json({status: "Sucess"}))
        .catch(err=>res.json(err))
    
})
//get orders by admin
app.get('/admin/orders', (req,res)=>{
    OrderModel.find()
    .then(orders=>res.json(orders))
    .catch(err=>res.json(err))
})
//create card by admin
app.post('/admin/cards/create-card', (req, res)=>{
    const {nfc_url, uid} =req.body;
        CardModel.create({nfc_url, uid})
        .then(card =>res.json({status: "Sucess"}))
        .catch(err=>res.json(err))
    
})

// Multer configuration for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Specify the destination directory for uploaded files
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    // Rename the uploaded file
    cb(null, Date.now() + "-" + file.originalname);
  },
});

// Create the multer instance
const upload = multer({ storage: storage });

// Handle card creation with file uploads
app.post("/user/create-card", upload.fields([
  { name: 'coverPic', maxCount: 1 },
  { name: 'profilePic', maxCount: 1 }
]), async (req, res) => {
  try{
  // Extract form data and file paths
  const { uid, youtube,bio, linkedin, facebook, theme, mode, spotify, instagram, twitter } = req.body;
  const coverPicPath = req.files['coverPic'] ? req.files['coverPic'][0].path : null;
  const profilePicPath = req.files['profilePic'] ? req.files['profilePic'][0].path : null;

  // Create a new card record with form data and file paths
  // Check if a document with the same uid exists
  let existingCard = await CardModel.findOne({ uid });

  if (existingCard) {
    // Update the existing card's details
    existingCard.youtube = youtube || existingCard.youtube;
    existingCard.bio = bio || existingCard.bio;
    existingCard.linkedin = linkedin || existingCard.linkedin;
    existingCard.facebook = facebook || existingCard.facebook;
    existingCard.theme = theme || existingCard.theme;
    existingCard.mode = mode || existingCard.mode;
    existingCard.spotify = spotify || existingCard.spotify;
    existingCard.instagram = instagram || existingCard.instagram;
    existingCard.twitter = twitter || existingCard.twitter;
    existingCard.cover_pic = coverPicPath || existingCard.cover_pic;
    existingCard.profile_pic = profilePicPath || existingCard.profile_pic;

    // Save the updated card document
    await existingCard.save();
    res.json({ status: "Card Updated" });
  } else {
    // Create a new card record
    const newCard = new CardModel({
      uid,
      youtube,
      bio,
      linkedin,
      facebook,
      theme,
      mode,
      spotify,
      instagram,
      twitter,
      cover_pic: coverPicPath,
      profile_pic: profilePicPath,
    });

    // Save the new card document
    await newCard.save();
    res.json({ status: "Card Created" });
  }
} catch (err) {
  console.error(err);
  res.status(500).json({ error: "Server Error" });
}
});


//get cards by admin
app.get('/admin/cards', (req,res)=>{
    CardModel.find()
    .then(cards=>res.json(cards))
    .catch(err=>res.json(err))
})

// Multer storage configuration
const storage_testimonial = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "testimonial-upload/"); // Save uploaded images to this folder
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname); // Append timestamp to file name to avoid duplicates
  },
});
const upload_testimonial = multer({ storage: storage_testimonial });

// Route handler for adding a testimonial with photo
app.post("/admin/testimonial/add-testimonial", upload_testimonial.single("photo"), (req, res) => {
  const { name, organization, testimonials } = req.body;
  const photoPath = req.file ? req.file.path : null;
  console.log(photoPath);

  TestimonialModel.create({ name, organization , photoPath ,testimonials})
    .then((testimonial) => res.json({ status: "Success", testimonial }))
    .catch((err) => res.status(500).json({ error: err.message || "Internal server error" }));
});

//get testimonials by admin
app.get('/admin/testimonial', (req,res)=>{
    TestimonialModel.find()
    .then(testimonials=>res.json(testimonials))
    .catch(err=>res.json(err))
})

// Delete a testimonial by ID
app.delete('/admin/testimonial/:testimonialId', (req, res) => {
    const testimonialId = req.params.testimonialId;
  
    TestimonialModel.findOneAndDelete({ _id: testimonialId })
      .then(testimonial => {
        if (testimonial) {
          res.json({ message: 'Testimonial deleted successfully' });
        } else {
          res.status(404).json({ error: 'Testimonial not found' });
        }
      })
      .catch(err => res.status(500).json({ error: 'Internal Server Error' }));
  });

  //support add
app.post('/user/support', (req, res)=>{
    const {email, ticket, description, datetime} =req.body;
        SupportModel.create({email, ticket, description, datetime})
        .then(support =>res.json({status: "Sucess"}))
        .catch(err=>res.json(err))
})

//get support by admin
app.get('/admin/support', (req,res)=>{
    SupportModel.find()
    .then(supports=>res.json(supports))
    .catch(err=>res.json(err))
})

//get email of support by admin
app.get('/admin/support-request-user/:userId', (req,res)=>{
    const userID = req.params.userId;
  
    SupportModel.findOne({ _id: userID })
    .then(support_email=>res.json(supports.email))
    .catch(err=>res.json(err))
})
// Delete a testimonial by ID
app.delete('/admin/support/:supportId', (req, res) => {
    const supportId = req.params.supportId;
  
    SupportModel.findOneAndDelete({ _id: supportId })
      .then(support => {
        if (support) {
          res.json({ message: 'support deleted successfully' });
        } else {
          res.status(404).json({ error: 'support not found' });
        }
      })
      .catch(err => res.status(500).json({ error: 'Internal Server Error' }));
  });

  //get profile preview by user
app.get('/user/preview/:userId', (req,res)=>{
    const userId = req.params.userId;

    UserModel.findOne({ _id: userId })
      .then(user => {
        if (!user) {
          return res.status(404).json({ error: "User not found" });
        }
        // Assuming you want to send user data except sensitive fields like password
        const profileData = {
          userId: user._id,
          username : user.username,
          firstname: user.firstname,
          middlename: user.middlename,
          lastname: user.lastname,
          phone: user.phone,
          organization: user.organization,
          email: user.email,

          // Add other necessary fields here
        };
        res.json(profileData);
      })
      .catch(err => {
        console.error('Error fetching profile:', err);
        res.status(500).json({ error: "Internal server error" });
      });
  });

  //get profile preview by user
app.get('/user/preview-card/:userId', (req,res)=>{
    const userId = req.params.userId;

    CardModel.findOne({ uid: userId })
      .then(card => {
        if (!card) {
          return res.status(404).json({ error: "Card not found" });
        }
        // Assuming you want to send user data except sensitive fields like password
        const cardData = {
          cardId: card._id,
          cardProfile: card.profile_pic,
          cardCover: card.cover_pic,
          facebook : card.facebook,
          instagram : card.instagram,
          youtube : card.youtube,
          spotify : card.spotify,
          twitter : card.twitter,
          linkedin : card.linkedin,
          bio : card.bio,
          mode : card.mode,
          theme : card.theme,
          

          // Add other necessary fields here
        };
        res.json(cardData);
      })
      .catch(err => {
        console.error('Error fetching profile card:', err);
        res.status(500).json({ error: "Internal server error" });
      });
  });


   //get profile preview info
app.get('/user-info/:username', (req,res)=>{
  const username = req.params.username;

  UserModel.findOne({ username: username })
    .then(user => {
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      // Assuming you want to send user data except sensitive fields like password
      const profileData = {
        userId: user._id,
        username : user.username,
        firstname: user.firstname,
        middlename: user.middlename,
        lastname: user.lastname,
        phone: user.phone,
        organization: user.organization,
        email: user.email,

        // Add other necessary fields here
      };
      res.json(profileData);
    })
    .catch(err => {
      console.error('Error fetching profile:', err);
      res.status(500).json({ error: "Internal server error" });
    });
});

//get profile info
app.get('/user-info-preview/:username', async (req, res) => {
  try {
    const username = req.params.username;
    console.log("sad",username)
    const user = await UserModel.findOne({ username });
    console.log("user",user)

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    const uid = user._id; // Assuming userId is the field name for uid in UserModel
    console.log(uid)
    const cardData = await CardModel.findOne({ uid });
    console.log("Fetched Card Data:", cardData);
    if (!cardData) {
      return res.status(404).json({ error: 'Card data not found for this user' });
    }
    res.status(200).json({ cardData });
  } catch (error) {
    console.error('Error fetching user info:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.listen(3001, ()=>{
    console.log('server running')
})