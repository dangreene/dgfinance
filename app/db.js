var mongoose = require('mongoose');

var bootstrapDb = function(){
    mongoose.connect('mongodb://127.0.0.1:27017/dgfinance');
    require('./models/account');
    require('./models/transaction');

    var db = mongoose.connection;

    db.on('error', console.error.bind(console, 'connection error:'));

    db.once('open', function (callback) {
        console.log("connected");
    });
};


module.exports = bootstrapDb;