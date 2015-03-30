var indexController = require('../controllers/web/index');

var registerRoutes = function(app) {
    app.route('/').get(indexController.getIndex);
};

module.exports = {registerRoutes: registerRoutes};
