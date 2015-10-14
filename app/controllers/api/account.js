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

exports.createAccount = function(req, res, next){
  var accountRequest = req.body;
  var newAccount = new Account(accountRequest);
  newAccount.save(function(err, doc){
    if (err) {
      return res.status(500).json({
        message: 'error'
      });
    }
    return res.json({
      accountId: doc._id
    });
  });
};
