var indexController = require('../controllers/web/index'),
  express = require('express'),
  router = express.Router();

router.route('/').get(indexController.getIndex);

module.exports = router;
