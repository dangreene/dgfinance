const accountsController = require('../controllers/accountsController');

function register(server) {
  server.get('/api/accounts/', accountsController.getAccounts);
  server.get('/api/accounts/:id', accountsController.getAccount);
  server.post('/api/accounts/', accountsController.createAccount);
  server.get('/api/accounts/:id/transactions', accountsController.getAccountTransactions);
}

exports.register = register;
