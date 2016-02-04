const mongoose = require('mongoose');
const TransactionCategory = mongoose.model('TransactionCategory');

function getCategories() {
  return TransactionCategory.find().exec();
}

function getCategory(categoryId) {
  return TransactionCategory.findOne({
    _id: categoryId
  }).exec();
}

function addCategory(categoryName) {
  return new TransactionCategory({
    description: categoryName
  }).save();
}

exports.addCategory = addCategory;
exports.getCategories = getCategories;
exports.getCategory = getCategory;
