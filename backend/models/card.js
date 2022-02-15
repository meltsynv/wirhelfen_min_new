const mongoose = require("mongoose");

const cardSchema = mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  subcategory: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  activetill: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  cardType: {
    type: String,
    required: true,
  },
  sender: {
    type: Object,
    required: true,
  },
  answered_users: {
    type: Array,
    default: [],
    required: false,
  },
});

exports.Card = mongoose.model("Card", cardSchema);
