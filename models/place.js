var mongoose = require('mongoose')
    Schema = mongoose.Schema

var PlaceSchema = new Schema({
  name: String,
  address: String,
  city: String,
  phone: String,
  description: String,
  website: String,
  pic: String,
  lat: Number,
  long: Number
});

var Place = mongoose.model('Place', PlaceSchema);

module.exports = Place;
