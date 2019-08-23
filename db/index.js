const mongoose = require('mongoose');
const config = require('config');

// DB config
const db = config.get('mongoURI');

// Connect to Mongo
function connect(){
  return new Promise((resolve, reject) => {
    mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true
    }).then((res, err) => {
      if(err) return reject(err);
      console.log('MongoDB Connected...');
      resolve();
    });
  })
}

function close(){
  return mongoose.disconnect();
}


module.exports = {connect, close};
