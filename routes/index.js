var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/auth', function(req, res, next) {
  res.render('/auth/auth.html');
});

router.get('/signup', function(req, res, next) {
  res.render('signup');
});

router.get('/community', function(req, res, next) {
  res.render('community');
});

router.get('/search', function(req, res, next) {
  res.render('search');
});


module.exports = router;


