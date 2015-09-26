var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var accountSchema = mongoose.Schema({
  initialBalance: Number,
  description: String
});

mongoose.model('Account', accountSchema, 'accounts');
