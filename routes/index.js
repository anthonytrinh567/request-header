var express = require('express');
var router = express.Router();
var whoami = require('../controllers/whoami');

/* GET home page. */
router.get('/', whoami.homePage);
router.get('/api/whoami', whoami.info);

module.exports = router;
