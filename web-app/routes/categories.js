const categoryController = require('../controllers/categoriesController');

function register(server) {
  server.get('/api/categories/', categoryController.getCategories);
}

exports.register = register;
