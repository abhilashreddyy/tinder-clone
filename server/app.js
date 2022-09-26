var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors')
const connection = require("./db")
connection();
// var indexRouter = require('./build/index.html');
// var usersRouter = require('./routes/users');
var app = express();
// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'build')));
app.use(cors)

const port = process.env.PORT || 8000;

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/build/index.html'));
});
app.listen(port, "127.0.0.1");
console.log('Server started at http://localhost:' + port);
