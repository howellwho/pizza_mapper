var mongoose = require('mongoose')
    Schema = mongoose.Schema

var ListSchema = new Schema({
  title: String,
  places: [PlacesSchema]
})
//reference the place id

var List = mongoose.model('List', ListSchema);

module.exports = List;
