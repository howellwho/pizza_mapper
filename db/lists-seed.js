var mongoose = require('mongoose'),
        conn = mongoose.connect(
            process.env.MONGOLAB_URI ||
            process.env.MONGOHQ_URL ||
            "mongodb://localhost/pizzaMapper"
        ),
        List = require("../models/list");


List.remove({}, function(err){
  if (err) console.log("ERROR: ", err);
});

var lists = [
     {
       name: "SFist Guide",
       city: "San Francisco",
       url: "http://sfist.com/2015/09/17/the_best_pizza_in_san_francisco.php",
       places: []
     },
     {
       name: "Yelp SF Top 10",
       city: "San Francisco",
       url: "http://www.yelp.com/search?find_desc=Best+Pizza&find_loc=San+Francisco%2C+CA",
       places: []
     },
     {
       name: "Yelp Oakland Top 10",
       city: "Oakland",
       url: "http://www.yelp.com/search?find_desc=Best+Pizza&find_loc=Oakland,+CA",
       places: []
     },
     {
       name: "Eater SF Top 25",
       city: "San Francisco",
       url: "http://sf.eater.com/maps/san-franciscos-25-most-iconic-pizzerias",
       places: []
     },
     {
       name: "Thrillist Top Pizzas",
       city: "San Francisco",
       url: "https://www.thrillist.com/eat/san-francisco/the-best-sf-pizzas-by-hood-thrillist-san-francisco",
       places: []
     },
     {
       name: "Bold Italic Oakland Pizza",
       city: "Oakland",
       url: "www.thebolditalic.com/articles/4693-read-this-if-youre-obsessed-with-oaklands-pizza",
       places: []
     }
   ];

   List.create(places, function(err, lists){
     if(err){
       console.log("Error: ", err);
     } else {
       console.log("created: ", lists);
       mongoose.connection.close();
     }
   });
