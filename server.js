// Dependencies
var express         = require('express');
var mongoose        = require('mongoose');
var port            = process.env.PORT || 3000;
var morgan          = require('morgan');
var bodyParser      = require('body-parser');
var methodOverride  = require('method-override');
var auth            = require('./resources/auth');
var app             = express();

// require and load dotenv
require('dotenv').load();

// Sets the connection to MongoDB
mongoose.connect("mongodb://localhost/pizzaMapper");

process.on('exit', function(){
  mongoose.disconnect();
});

// Logging and Parsing
app.use(express.static(__dirname + '/public'));                 // sets the static files location to public
app.use('/public/bower_components',  express.static(__dirname + '/public/bower_components')); // Use BowerComponents
app.use(morgan('dev'));                                         // log with Morgan
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.urlencoded({extended: true}));               // parse application/x-www-form-urlencoded
app.use(bodyParser.text());                                     // allows bodyParser to look at raw text
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));  // parse application/vnd.api+json as json
app.use(methodOverride());
// set view engine to hbs (handlebars)
app.set('view engine', 'hbs');

// require User and Post models
// var User = require('./models/user');
// var Place = require('./models/place');

// Routes
// ------------------------------------------------------
// require('./app/routes.js')(app);

app.get('*', function (req, res) {
  console.log("hitting index");
  res.render('index');
});

// Listen
app.listen(port);
console.log('App listening on port ' + port);
