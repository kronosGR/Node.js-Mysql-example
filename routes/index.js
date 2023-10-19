var express = require('express');
var router = express.Router();
const passport = require('passport');
const LocalStrategy = require('passport-local');
const db = require('../models');
const UserService = require('../services/UserService');

const userService = new UserService(db);

passport.serializeUser(function (user, cb) {
  process.nextTick(function () {
    cb(null, { id: user.id, username: user.username, role: user.RoleId });
  });
});

passport.deserializeUser(function (user, cb) {
  process.nextTick(function () {
    return cb(null, user);
  });
});

/* GET home page. */
router.get('/', function (req, res, next) {
  console.log('user', req.user);
  if (!req.user) {
    res.render('index', { title: 'Express', user: null });
  } else {
    res.render('index', { title: 'Express', user: req.user });
  }
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

router.post(
  '/login/password',
  passport.authenticate('local', {
    successReturnToOrRedirect: '/',
    failureRedirect: '/login',
    failureMessage: true,
  })
);

router.get('/logout', function (req, res, next) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect('/');
  });
});

module.exports = router;
