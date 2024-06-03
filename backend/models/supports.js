const mongoose = require('mongoose')

const SupportSchema = new mongoose.Schema({
    email: {
        type: String,
        default: null,
    },
    ticket: {
        type: String,
        default: null,
    },
    description: {
        type: String,
        default: null,
    },
    datetime:{
        type: String,
        default: null,
    }
})

const SupportModel = mongoose.model("supports", SupportSchema)
module.exports = SupportModel