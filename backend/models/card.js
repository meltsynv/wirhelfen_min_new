const mongoose = require('mongoose');

const cardSchema = mongoose.Schema({
    category: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    cardType: {
        type: String,
    },
    sender:{
        type: Object,
        required: true,
    },
    postdate: {
        type: Date,
        default: Date.now()
    },
    answered_users:{
        type: Array,
        default: [],
        required: false,
    }


})

exports.Card = mongoose.model('Card', cardSchema);