const mongoose = require('mongoose');
const AccountTransaction = mongoose.model('AccountTransaction');
const categoryService = require('./transactionCategoryService');
const ObjectId = mongoose.Types.ObjectId;

function getTransactions(query) {
  return AccountTransaction.find(query).exec();
}

function getAccountTransactions(accountId) {
  return AccountTransaction.find({account: new ObjectId(accountId)}).exec();
}

function getTransactionsByCategory(categoryId) {
  return AccountTransaction.find({
    categories: {
      $in: [new ObjectId(categoryId)]
    }
  }).exec();
}

function getTransaction(transactionId) {
  return AccountTransaction.findOne({
    _id: new ObjectId(categoryId)
  }).exec();
}

function addTransactions(transactions) {
  return new Promise(function(resolve, reject) {
    AccountTransaction.collection.insert(transactions, function(err, docs) {
      if (err) {
        return reject(err);
      } else {
        return resolve(docs);
      }
    });
  });
}

function addCategory(transactionId, categoryId) {
  return categoryService.getCategory(categoryId)
    .then((categoryDoc) => {
      return AccountTransaction.findByIdAndUpdate(transactionId, {
        $push: {
          'categories': categoryDoc._id
        }
      }).exec();
    });
}

exports.getTransactions = getTransactions;
exports.getAccountTransactions = getAccountTransactions;
exports.getTransactionsByCategory = getTransactionsByCategory;
exports.addTransactions = addTransactions;
exports.addCategory = addCategory;
