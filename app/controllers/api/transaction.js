var mongoose = require('mongoose');
var Account = mongoose.model('Account');
var Transaction = mongoose.model('Transaction');
var _ = require('lodash');

var getTransactions = function(req, res, next) {
  var accountId = req.params.id;
  Transaction.find({
    account: accountId
  }, function(err, doc) {
    res.json(doc);
  });
};

var saveTransactions = function(req, res, next) {
  var accountId = req.params.id;
  var records = req.body;

  Account.findOne({
    _id: accountId
  }, function(err, doc) {
    if (err) {
      res.json({
        message: 'failed'
      });
    } else {
      var docsToSave = _.map(records, function(record) {
        return {
          account: doc._id,
          transactionPostDate: record.transactionPostDate,
          transactionDate: record.transactionDate,
          description: record.description,
          amount: record.amount,
          transactionType: record.transactionType
        };
      });

      Transaction.collection.insert(docsToSave, {}, function(err, doc) {
        res.json({
          message: 'success'
        });
      });
    }
  });
};

module.exports = {
  saveTransactions: saveTransactions,
  getTransactions: getTransactions
};
