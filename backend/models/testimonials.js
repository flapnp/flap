const mongoose = require('mongoose')

const TestimonialSchema = new mongoose.Schema({
    name: {
        type: String,
        default: null,
    },
    organization: {
        type: String,
        default: null,
    },
    photoPath: {
        type: String,
        default: null,
    },
    testimonials: {
        type: String,
        default: null,
    },
  
})

const TestimonialModel = mongoose.model("testimonials", TestimonialSchema)
module.exports = TestimonialModel