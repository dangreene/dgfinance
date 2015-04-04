var accountController = require('../controllers/api/account'),
    transactionController = require('../controllers/api/transaction');

var registerRoutes = function(app) {
    app.route('/api/account').get(accountController.getAllAccounts);
    app.route('/api/account/:id').get(accountController.getAccount);
    app.route('/api/account/:id/transactions').post(transactionController.saveTransactions)
};

module.exports = {registerRoutes: registerRoutes};
