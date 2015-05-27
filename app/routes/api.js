var accountController = require('../controllers/api/account');
var  transactionController = require('../controllers/api/transaction');
var  express = require('express');
var  router = express.Router();

router.route('/accounts')
  .get(accountController.getAllAccounts);

router.route('/accounts/:id')
  .get(accountController.getAccount);

router.route('/accounts/:id/transactions')
  .get(transactionController.getTransactions)
  .post(transactionController.saveTransactions);

module.exports = router;
