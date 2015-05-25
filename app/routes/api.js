var accountController = require('../controllers/api/account'),
  transactionController = require('../controllers/api/transaction'),
  express = require('express'),
  router = express.Router();

router.route('/accounts')
  .get(accountController.getAllAccounts);

router.route('/accounts/:id')
  .get(accountController.getAccount);

router.route('/accounts/:id/transactions')
  .get(transactionController.getTransactions)
  .post(transactionController.saveTransactions);

module.exports = router;
