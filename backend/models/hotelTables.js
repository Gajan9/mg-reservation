//les tables pour hotel 
// backend/models/hotelModel.js
const mongoose = require('mongoose');

const hotelSchema = mongoose.Schema({
  nom: {
    type: String,
    required: true
  },
  ville: {
    type: String,
    required: true
  },
  etoiles: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  prix: {
    type: Number,
    required: true
  },
  image: {
    type: String
  },
  description: {
    type: String,
    required: true
  },
  commodites: {
    type: [String]
  },
}, {
  timestamps: true
});

const Hotel = mongoose.model('Hotel', hotelSchema);

module.exports = Hotel;