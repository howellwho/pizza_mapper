var geocoder = require('geocoder');
var Place = require('../models/place')

var GeocoderController = {
  geocodeAddress: function (req, res) {
    var address = req.body.address
    var name = req.body.name

    geocoder.geocode(address, function ( err, data ) {
      console.log("results:", data.results[0].geometry.location.lng)
      var lat = data.results[0].geometry.location.lat
      var long = data.results[0].geometry.location.lng

      var coords = {
                  latitude: lat,
                  longitude: long,
                  id: Date.now()
      }

      Place.create({name: name, /*address: address, description: description, */ coords: coords},

      function(err, newPlace) {
        console.log(newPlace)
        err ? console.log(err) : res.json(newPlace);
      })
    });
  }
}

module.exports = GeocoderController
