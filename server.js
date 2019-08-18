const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const config = require('config');
const passport = require('passport');

/*
var indexRouter = require('./routes/index');
var loginRouter = require('./routes/login');
var registerRouter = require('./routes/register');
var resetRouter = require('./routes/reset_pass');
var editRouter = require('./routes/change_pass');
*/

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

let app = express();

// cookieSession config
const cookieSession = require('cookie-session');
app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000, // One day in milliseconds
    keys: ['randomstringhere1234']
}));

app.engine('html', require('jade').renderFile);
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

let passportRouter = require('./routes/auth/googleAuth')(passport);
app.use('/', passportRouter);
app.use('/api/v1/auth', require('./routes/auth/auth'));
//using passport
app.use(passport.initialize()); // Used to initialize passport
app.use(passport.session()); // Used to persist login sessions

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
