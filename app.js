require('dotenv').config();
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');
const JsonStore = require('express-session-json')(session);
const passport = require('passport');
const LocalStrategy = require('passport-local');

var indexRouter = require('./routes/index');
var animalsRouter = require('./routes/animals');
var speciesRouter = require('./routes/species');
var temperamentRouter = require('./routes/temperament');

const db = require('./models');
const UserService = require('./services/UserService');
const isAdmin = require('./middleware/isAdmin');

const userService = new UserService(db);

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname + '/node_modules/jquery/dist/'));

app.use(
  session({
    secret: 'kronos',
    resave: false,
    saveUninitialized: false,
    store: new JsonStore(),
  })
);

passport.use(
  new LocalStrategy(function verify(username, password, cb) {
    userService.getByName(username).then((data) => {
      if (data === null) {
        return cb(null, false, { message: 'Incorrect username or password' });
      }
      if (data.password !== password) {
        return cb(null, false, { message: 'Incorrect username or password' });
      }
      return cb(null, data);
    });
  })
);

app.use(passport.authenticate('session'));

app.use('/', indexRouter);
app.use('/animals', animalsRouter);
app.use('/species', isAdmin, speciesRouter);
app.use('/temperament', isAdmin, temperamentRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
