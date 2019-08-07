const mongoose = require('mongoose');
const config = require('config');

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


