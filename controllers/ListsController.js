var List = require('../models/list');

var ListsController = {
  index: function (req, res) {
    List.find({}, function (err, lists){
      err ? console.log(err) : res.json({lists});
    });
  },
  showList: function (req, res) {
    var id = req.params.id;
    List.find({_id: id}, function(err,list){
      err ? console.log(err) : res.json({list});
    });
  }
};

module.exports = ListsController;
