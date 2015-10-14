var mongoose = require('mongoose');

// TODO: load all models in folder dynamically
require('./models/account');
require('./models/transaction');

exports.connect = function(uri, successCallback) {

  mongoose.connect(uri);

  var db = mongoose.connection;

  db.on('error', console.error.bind(console, 'connection error:'));

  db.once('open', function(callback) {
    console.log('connected to database');
    successCallback();
  });
};
