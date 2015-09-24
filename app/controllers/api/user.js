var mongoose = require('mongoose');
var User = mongoose.model('User');

exports.getUser = function(req, res, next) {
  var id = req.params.id;
  User.find({
    _id: id
  }, function(err, doc) {
    res.json(doc);
  });
};

exports.addUser = function(req, res, next) {

};
