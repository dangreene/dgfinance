var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = mongoose.Schema({
  userId: String,
  firstName: String,
  lastName: String
});

mongoose.model('User', userSchema, 'users');
