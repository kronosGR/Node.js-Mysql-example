var express = require('express');
var router = express.Router();
const db = require('../models');
const UserService = require('../services/UserService');

const userService = new UserService(db);

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express', user: null });
});

router.get('/login', function (req, res, next) {
  res.render('login', { title: 'Express', user: null });
});

router.get('/signup', function (req, res, next) {
  res.render('signup', { title: 'Express', user: null });
});

router.post('/signup', function (req, res, next) {
  userService.create(
    req.body.firstname + ' ' + req.body.lastname,
    req.body.username,
    req.body.password,
    2
  );
  res.redirect('login');
});

module.exports = router;
