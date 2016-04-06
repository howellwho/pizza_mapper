var mongoose = require('mongoose'),
        conn = mongoose.connect(
            process.env.MONGOLAB_URI ||
            process.env.MONGOHQ_URL ||
            "mongodb://localhost/pizzaMapper"
        ),
        Place = require("../models/place");

 Place.remove({}, function(err){
  if (err) console.log("ERROR: ", err);
});

var places = {
      name: "Little Star",
      address: "846 Divisadero Street, San Francisco",
      city: "San Francisco",
      description: "good",
      website: "http://www.littlestarpizza.com/",
      pic: "",
      lat: 37.777548,
      long: -122.438007
    };

Place.create(places, function(err, places){
  if(err){
    console.log("Error: ", err);
  } else {
  // console.log("teams created: ", places);
    // err ? console.log(err) :
    console.log("created: ", places);
    mongoose.connection.close();
  }
});
