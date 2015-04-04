var accountController = require('../controllers/api/account'),
    transactionController = require('../controllers/api/transaction');

var registerRoutes = function(app) {
    app.route('/api/accounts')
        .get(accountController.getAllAccounts);

    app.route('/api/accounts/:id')
        .get(accountController.getAccount);

    app.route('/api/accounts/:id/transactions')
        .get(transactionController.getTransactions)
        .post(transactionController.saveTransactions)
};

module.exports = {registerRoutes: registerRoutes};
