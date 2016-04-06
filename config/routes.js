var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var ListsController = require('../controllers/ListsController');
var PlacesController = require('../controllers/PlacesController');

//Lists routes  
router.route('/lists/api')
  .get(ListsController.index)
//
router.route('/lists/api/:id')
  .get(ListsController.showList)
//Places routes
router.route('/places/api')
  .get(PlacesController.index)

router.route('/places/api/:id')
  .get(PlacesController.showPlace)

module.exports = router;
