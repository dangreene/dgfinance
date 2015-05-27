var indexController = require('../controllers/web/index');
var express = require('express');
var router = express.Router();

router.route('/').get(indexController.getIndex);

module.exports = router;
