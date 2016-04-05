var mongoose = require('mongoose')
    Schema = mongoose.Schema

var PlaceSchema = new Schema({
  name: String,
  address: String,
  description: String,
  website: String,
  list: {
      sfist: Boolean,
      yelp_sf: Boolean,
      yelp_oak: Boolean,
      eatersf: Boolean,
      thrillist: Boolean,
      bold_italic_oak: Boolean
    }
  coords: {
      latitude: Number,
      longitude: Number
    }
})

var Place = mongoose.model('Place', PlaceSchema);

module.exports = Place;
