var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const appRoutes = require('./routes/app');
const user = require('./routes/users');
const upload = require('./routes/uploads');
const dash = require('./routes/dashboard');
const pub = require('./routes/publicView');
const switchstate = require('./routes/switchStatus');
var app = express();
const mongoose = require('mongoose');

//mongoose.connect('mongodb://127.0.0.1:27017/ipass');
mongoose.connect('mongodb://gowtham:dbpassword@ds014368.mlab.com:14368/ipass');

mongoose.connection.on('connected', function () {
  console.log('DB connected!!!');
});
mongoose.connection.on('error', function (err) {
  console.log('Error in Mongoose connection: ', err);
});

mongoose.connection.on('disconnected', function () {
   console.log('Mongoose is now disconnected..!');
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});

app.use('/', appRoutes);
app.use('/user', user );
app.use('/upload', upload);
app.use('/dashboard', dash);
app.use('/public', pub);
app.use('/switchState', switchstate);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    return res.render('index');
});


module.exports = app;
