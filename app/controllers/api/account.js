var mongoose = require('mongoose');
var Account = mongoose.model('Account');

exports.getAllAccounts = function(req, res, next) {
  Account.find({}, function(err, doc) {
    res.json(doc);
  });
};

exports.getAccount = function(req, res, next) {
  Account.findOne({
    _id: req.params.id
  }, function(err, doc) {
    res.json(doc);
  });
};
