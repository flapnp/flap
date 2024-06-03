const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({
    product: {
        type: String,
    },
    category: {
        type: String,
    },
    custom:  {
        type: String,
    },
    purpose:  {
        type: String,
    },
    status: {
        type: String,
        default: '0',
    },
    userId: String,

})

const OrderModel = mongoose.model("orders", OrderSchema)
module.exports = OrderModel