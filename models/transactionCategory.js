const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionCategorySchema = new Schema({
  description: String
});

mongoose.model('TransactionCategory', transactionCategorySchema,
  'transaction_categories');
