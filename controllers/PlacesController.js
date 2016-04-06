var Place = require('../models/place');

var PlacesController = {
  index: function (req, res) {
    Place.find({}, function (err, places){
      err ? console.log(err) : res.json({places});
    });
  },
  showPlace: function (req, res) {
    var id = req.params.id;
    Place.find({_id: id}, function(err,place){
      err ? console.log(err) : res.json({place});
    });
  }
};

module.exports = PlacesController;
