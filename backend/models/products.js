const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    product_name: {
        type: String,
    },
    product_icon: {
        type: String,
    },
    product_description:  {
        type: String,
    },
    product_longdescription:  {
        type: String,
    },
})

const ProductModel = mongoose.model("products", ProductSchema)
module.exports = ProductModel