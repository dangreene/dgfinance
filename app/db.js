var mongoose = require('mongoose');

require('./models/account');
require('./models/transaction');

exports.connect = function(successCallback) {

  mongoose.connect('mongodb://127.0.0.1:27017/dgfinance');

  var db = mongoose.connection;

  db.on('error', console.error.bind(console, 'connection error:'));

  db.once('open', function(callback) {
    console.log('connected');
    successCallback();
  });
};
