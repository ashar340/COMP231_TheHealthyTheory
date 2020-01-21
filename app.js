const express = require('express');
const path = require('path');

// routes
const indexRoute = require(path.join(__dirname, 'routes', 'indexRoute'));
const userRoute = require(path.join(__dirname, 'routes', 'userRoute'));
const adminData = require(path.join(__dirname, 'routes', 'adminRoute'));
const errorRoute = require(path.join(__dirname, 'routes', 'errorRoute'));

const app = express();

// template engine
app.set('view engine', 'ejs');
app.set('views', 'views');

// middlewares
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(express.static(path.join(__dirname, 'public')));

// route middlewares
app.use(indexRoute);
app.use('/user', userRoute);
app.use('/admin', adminData.routes);
app.use(errorRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT);