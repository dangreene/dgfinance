var accountController = require('../controllers/api/account');

var registerRoutes = function(app) {
    app.route('/api/account').get(accountController.getAllAccounts);
    app.route('/api/account/:id').get(accountController.getAccount);
};

module.exports = {registerRoutes: registerRoutes};
