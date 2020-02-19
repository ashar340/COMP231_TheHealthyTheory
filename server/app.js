var createError = require('http-errors');

var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var express = require('express');
var app = express();

app.use((req, res, next) => {
    res.status(200).json({
        message: 'Server works!'
    });
});

module.exports= app;

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var connectDB = require('./config/db');

module.exports = app;
