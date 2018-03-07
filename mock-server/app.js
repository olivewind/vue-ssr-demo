const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const fs = require('fs');

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,PATCH,OPTIONS");
  console.log('client call api:', req.url);
  next();
});

// cookie & body parser
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// error handler
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send({
    message: ' 500 error, please contact me at olive.wang@daocloud.io',
    error: err.stack,
  });
});

// mock api
app.use('/api/user', require('./app/routes/api/user'));
app.use('/api/users', require('./app/routes/api/users'));


module.exports = app;
