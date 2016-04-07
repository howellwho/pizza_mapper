var mongoose = require('mongoose'),
        conn = mongoose.connect(
            process.env.MONGOLAB_URI ||
            process.env.MONGOHQ_URL ||
            "mongodb://localhost/pizzaMapper"
        ),
        Place = require("../models/place");
        List = require("../models/list");

 Place.remove({}, function(err){
  if (err) console.log("ERROR: ", err);
});

List.remove({}, function(err){
  if (err) console.log("ERROR: ", err);
});

var places = [
    {
      name: "Little Star",
      address: "846 Divisadero Street, San Francisco",
      city: "San Francisco",
      description: "",
      website: "http://www.littlestarpizza.com/",
      pic: "",
      lat: 37.777548,
      long: -122.438007
    },
    {
      name: "",
      address: "",
      city: "",
      description: "",
      website: "",
      pic: "",
      lat: 0,
      long: 0
    },
    {
      name: "",
      address: "",
      city: "",
      description: "",
      website: "",
      pic: "",
      lat: 0,
      long: 0
    },
    {
      name: "",
      address: "",
      city: "",
      description: "",
      website: "",
      pic: "",
      lat: 0,
      long: 0
    },
    {
      name: "",
      address: "",
      city: "",
      description: "",
      website: "",
      pic: "",
      lat: 0,
      long: 0
    },
    {
      name: "",
      address: "",
      city: "",
      description: "",
      website: "",
      pic: "",
      lat: 0,
      long: 0
    },
    {
      name: "",
      address: "",
      city: "",
      description: "",
      website: "",
      pic: "",
      lat: 0,
      long: 0
    },
    {
      name: "",
      address: "",
      city: "",
      description: "",
      website: "",
      pic: "",
      lat: 0,
      long: 0
    },
    {
      name: "",
      address: "",
      city: "",
      description: "",
      website: "",
      pic: "",
      lat: 0,
      long: 0
    },
    {
      name: "",
      address: "",
      city: "",
      description: "",
      website: "",
      pic: "",
      lat: 0,
      long: 0
    },
    {
      name: "",
      address: "",
      city: "",
      description: "",
      website: "",
      pic: "",
      lat: 0,
      long: 0
    },
    {
      name: "",
      address: "",
      city: "",
      description: "",
      website: "",
      pic: "",
      lat: 0,
      long: 0
    },
    {
      name: "",
      address: "",
      city: "",
      description: "",
      website: "",
      pic: "",
      lat: 0,
      long: 0
    },
  ];

Place.create(places, function(err, places){
  if(err){
    console.log(err);
  } else {

    var x = places[0]._id;
    var x = places[1]._id;
    var x = places[2]._id;
    var x = places[3]._id;
    var x = places[4]._id;
    var x = places[5]._id;
    var x = places[6]._id;
    var x = places[7]._id;
    var x = places[8]._id;
    var x = places[9]._id;
    var x = places[10]._id;
    var x = places[11]._id;


    console.log("created: ", places);
