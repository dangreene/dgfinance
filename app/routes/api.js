var accountController = require('../controllers/api/account');
var transactionController = require('../controllers/api/transaction');
var userController = require('../controllers/api/user');

var express = require('express');
var router = express.Router();

router.route('/accounts')
  .get(accountController.getAllAccounts)
  .post(accountController.createAccount);

router.route('/accounts/:id')
  .get(accountController.getAccount);

router.route('/accounts/:id/transactions')
  .get(transactionController.getTransactions)
  .post(transactionController.saveTransactions);

router.route('/users/:id')
  .get(userController.getUser);

module.exports = router;
