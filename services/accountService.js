const mongoose = require('mongoose');
const Account = mongoose.model('Account');

function createAccount(account) {
  return new Account(account).save();
}

function getAccount(accountId) {
  return Account.findOne({
    _id: accountId
  }).exec();
}

function getAccounts() {
  return Account.find().exec();
}

exports.createAccount = createAccount;
exports.getAccount = getAccount;
exports.getAccounts = getAccounts;
