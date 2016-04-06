var mongoose = require('mongoose')
    Schema = mongoose.Schema

var ListSchema = new Schema({
  title: String,
  city: String,
  url: String,
  places: [{
    type: Schema.Types.ObjectId,
    ref: 'Place'
  }]
});
//reference the place id

var List = mongoose.model('List', ListSchema);

module.exports = List;
