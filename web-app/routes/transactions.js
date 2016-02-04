const transactionsController = require('../controllers/transactionsController');

function register(server) {
  server.get('/api/transactions/category/:id', transactionsController.getTransactionsByCategory)
  server.post('/api/transactions/:id/category/:catId', transactionsController.addCategoryToTransaction);
}

exports.register = register;
