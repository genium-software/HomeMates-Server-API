const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const config = require('config');
const passport = require('passport');

// Load from local files
const UserSchema = require('./models/User');

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

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//OAuth2 Login & Registration using passport
let passportRouter = require('./routes/auth/googleAuth')(passport);
app.use('/', passportRouter);
app.use(passport.initialize()); // Used to initialize passport
app.use(passport.session()); // Used to persist login sessions

//Initial Model
mongoose.model('User', UserSchema);

//Routes
app.use('/api/v1/auth', require('./routes/auth/auth'));

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
