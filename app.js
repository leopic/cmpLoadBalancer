var express = require('express');
var proxy = require('express-http-proxy');
var app = express();
var url = require('url');

// Poor man's load balancer
//var pool = ['http://localhost:3000', 'http://localhost:3001'],
//    selectedServer = Math.round(Math.random());

app.use('/', function() {
    console.log('algo');
});

//app.use('/', proxy(pool[selectedServer], {
//    forwardPath: function(req, res) {
//        console.log('Balanced to ' + pool[selectedServer]);
//        //selectedServer = Math.round(Math.random());
//        return url.parse(req.url).path;
//    }
//}));
//
//// catch 404 and forward to error handler
//app.use(function(req, res, next) {
//  var err = new Error('Not Found');
//  err.status = 404;
//  next(err);
//});
//
//// error handlers
//
//// development error handler
//// will print stacktrace
//if (app.get('env') === 'development') {
//  app.use(function(err, req, res, next) {
//    res.status(err.status || 500);
//    res.render('error', {
//      message: err.message,
//      error: err
//    });
//  });
//}
//
//// production error handler
//// no stacktraces leaked to user
//app.use(function(err, req, res, next) {
//  res.status(err.status || 500);
//  res.render('error', {
//    message: err.message,
//    error: {}
//  });
//});

module.exports = app;
