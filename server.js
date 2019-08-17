var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var authRouter = require('./routes/auth');

const mongoose = require('mongoose');
const config = require('config');
const bodyParser = require('body-parser');

// DB config
const db = config.get('mongoURI');

// Connect to Mongo
mongoose
    .connect(db, {
        useNewUrlParser: true,
        useCreateIndex: true
    })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err)); //TODO: send it to the front-end so it can be shown if error is happening

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());

// Set 'views' directory for any views being rendered res.render()
app.set('views', path.join(__dirname, 'views'));

app.use('/', indexRouter);
// app.use('/login', authRouter);
app.use('/register', authRouter);
// app.use('/reset_pass', authRouter);
// app.use('/change_pass', authRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

//Create the port
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));