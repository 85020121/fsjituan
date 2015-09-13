var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET en page. */
router.get('/en', function(req, res, next) {
  res.render('index_en', { title: 'Express' });
});

module.exports = router;
