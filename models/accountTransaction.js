const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const transactionType = require('./enums/transactionType');
const currencyType = require('./enums/currencyType');
const _ = require('lodash');

const transactionSchema = new Schema({
  account: {
    type: Schema.ObjectId,
    ref: 'Account'
  },
  transactionDate: Date,
  tranactionPostDate: Date,
  description: String,
  transactionType: {
    type: String,
    enum: _.values(transactionType)
  },
  transactionAmount: {
    currency: {
      type: String,
      enum: _.values(currencyType)
    },
    amount: Number
  },
  categories: [{
    type: Schema.ObjectId,
    ref: 'TransactionCategory'
  }]
});

mongoose.model('AccountTransaction', transactionSchema, 'account_transactions');
