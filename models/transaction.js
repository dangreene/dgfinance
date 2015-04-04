var mongoose = require('mongoose');

var transactionSchema = mongoose.Schema({
    transactionPostDate: Date,
    transactionDate: Date,
    description: String,
    amount: Number,
    transactionType: String,
    notes: String
});

mongoose.model("Transaction", transactionSchema, "transactions");