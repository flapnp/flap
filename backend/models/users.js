const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    firstname: {
        type: String,
        default: null,
    },
    middlename: {
        type: String,
        default: null,
    },
    lastname:  {
        type: String,
        default: null,
    },
    phone: {
        type: String,
        default: null,
    },
    organization: {
        type: String,
        default: null,
    },
    username: {
        type: String,
        default: 'null',
    },
    email: String,
    password: String,
    role: {
        type: String,
        default: 'user',
    },
})

const UserModel = mongoose.model("users", UserSchema)
module.exports = UserModel