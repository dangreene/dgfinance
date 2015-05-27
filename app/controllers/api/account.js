var mongoose = require('mongoose');
var Account = mongoose.model('Account');

var getAllAccounts = function(req, res, next) {
  Account.find({}, function(err, doc) {
    res.json(doc);
  });
};

var getAccount = function(req, res, next) {
  Account.findOne({
    _id: req.params.id
  }, function(err, doc) {
    res.json(doc);
  });
};

module.exports = {
  getAllAccounts: getAllAccounts,
  getAccount: getAccount
};
