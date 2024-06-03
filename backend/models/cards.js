const mongoose = require('mongoose')

const CardSchema = new mongoose.Schema({
    nfc_url: {
        type: String,
        default: null,
    },
    profile_pic: {
        type: String,
        default: null,
    },
    cover_pic: {
        type: String,
        default: null,
    },
    bio:{
        type: String,
        default: null,
    },
    uid: {
        type: String,
        default: null,
    },
    facebook:  {
        type: String,
        default: null,
    },
    instagram: {
        type: String,
        default: null,
    },
    youtube: {
        type: String,
        default: null,
    },
    spotify: {
        type: String,
        default: null,
    },
    twitter: {
        type: String,
        default: null,
    },
    linkedin: {
        type: String,
        default: null,
    },
    mode: {
        type: String,
        default: 'default',
    },
    theme:{
        type: String,
        default: null,
    }
})

const CardModel = mongoose.model("Cards", CardSchema)
module.exports = CardModel