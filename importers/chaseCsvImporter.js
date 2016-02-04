const chaseCsvParser = require('./parsers/chaseCsvParser');
const mongoose = require('mongoose');
const fs = require('fs');
const _ = require('lodash');
const transactionType = require('../models/enums/transactionType');
const currencyType = require('../models/enums/currencyType');
const accountService = require('../services/accountService');
const accountTransactionService = require('../services/accountTransactionService');

function importCsv(accountId, fileName) {
  return Promise.all([
      accountService.getAccount(accountId),
      parseFile(fileName)
    ])
    .then(addTransactionsHandler);
}

function addTransactionsHandler(values) {
  const account = values[0];

  if (!account) {
    throw new Error("Account Not Found.");
  }

  const transactions = mapTransactions(account, values[1]);
  return accountTransactionService.addTransactions(transactions);
}

function mapTransactions(account, records) {
  return _.map(records, function(record) {
    return mapTransaction(record, account._id);
  });
}

function parseFile(fileName) {
  return new Promise(function(resolve, reject) {
    fs.createReadStream(fileName)
      .pipe(chaseCsvParser.parse(function(err, data) {
        if (err) {
          return reject(err);
        } else {
          return resolve(data);
        }
      }));
  })
}

function mapTransaction(record, accountId) {
  return {
    account: accountId,
    transactionDate: record['Trans Date'],
    transactionPostDate: record['Post Date'],
    description: record.Description,
    transactionAmount: {
      amount: Math.abs(record.Amount * 100),
      currency: currencyType.USD
    },
    transactionType: getTransactionType(record.Type)
  }
}

function getTransactionType(value) {
  switch (value) {
    case 'Sale':
      return transactionType.outflow;
    case 'Return':
    case 'Payment':
      return transactionType.inflow;
    default:
      throw new Error('Invalid Transaction Type Provided.');
  }
}

exports.importCsv = importCsv;
