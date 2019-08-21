const createError = require('http-errors');
const express = require('express');
const fetch = require('node-fetch');
const path = require('path');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const logger = require('morgan');
const mongoose = require('mongoose');
const config = require('config');
const passport = require('passport');

const port = process.env.PORT || 5000;

//--------------------------------------------------------------------------
// TODO: Refactor this DB Configuration in a separate file, complete with its error handling
const db = config.get('mongoURI');

mongoose.connect(db, {  // Connect to Mongo
  useNewUrlParser: true,
  useCreateIndex: true
})
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err)); //TODO: send it to the front-end so it can be shown if error is happening

const UserSchema = require('./models/User'); // Load from local files

mongoose.model('User', UserSchema); //Initial models
// ------------------------------------------------------------------------

let app = express();

// cookieSession config
app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000, // One day in milliseconds
  keys: ['randomstringhere1234']
}));

//-------------------------------------------------------
// TODO: remove this later on as we are not using View from server side.
// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//-------------------------------------------------------

//OAuth2 Login & Registration using passport
let passportRouter = require('./routes/auth/googleAuth')(passport);

//Passport Route
app.use('/', passportRouter);
app.use(passport.initialize()); // Used to initialize passport
app.use(passport.session()); // Used to persist login sessions

// API Routes (include api/v1 for versioning purposes)
app.use('/api/v1/auth', require('./routes/auth/auth'));
app.use('/api/v1/cache', require('./routes/cache'));

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
app.listen(port, () => console.log(`Server running on port ${port}`));
