var mongoose = require('mongoose')
    Schema = mongoose.Schema

var PlaceSchema = new Schema({
  name: String,
  address: String,
  description: String,
  website: String,
  coords: {
      latitude: Number,
      longitude: Number
    }
})

var Place = mongoose.model('Place', PlaceSchema);

module.exports = Place;
