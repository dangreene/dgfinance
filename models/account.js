const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accountSchema = new Schema({
  startingBalance: Number,
  description: String
});

mongoose.model('Account', accountSchema, 'accounts');
