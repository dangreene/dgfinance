var indexController = require('../controllers/web/index'),
  express = require('express'),
  router = express.router();

router.route('/').get(indexController.getIndex);

module.exports = router;
