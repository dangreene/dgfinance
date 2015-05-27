var mongoose = require('mongoose');

var accountSchema = mongoose.Schema({
  initialBalance: Number,
  description: String
});

mongoose.model('Account', accountSchema, 'accounts');
