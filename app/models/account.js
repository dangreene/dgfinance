var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var accountSchema = mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  initialBalance: Number,
  description: String
});

mongoose.model('Account', accountSchema, 'accounts');
