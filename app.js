var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var version = "v1"; //API VERSION SWITCHING

/** Load modules */
var auth = require('./routes/' + version + '/auth');
var users = require('./routes/' + version + '/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/* Serve public folder to root path */
app.use('/', express.static(path.join(__dirname, 'public')));

/* SWAGGER UI */
app.use('/api/swagger-ui', express.static(path.join(__dirname, 'swagger-ui')));

/** Authentication Apis */
app.use('/api/' + version + '/auth', auth);
app.use('/api/' + version + '/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
