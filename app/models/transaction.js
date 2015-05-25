var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var transactionSchema = mongoose.Schema({
    account: {
        type: Schema.Types.ObjectId,
        ref: "Account"
    },
    transactionPostDate: Date,
    transactionDate: Date,
    description: String,
    amount: Number,
    transactionType: String,
    notes: String
});

mongoose.model("Transaction", transactionSchema, "transactions");