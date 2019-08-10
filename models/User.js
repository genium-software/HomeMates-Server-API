var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Role = require('./Role');
var House = require('./House');
var Receipt = require('./Receipt');

var userSchema = new Schema({
    name: String,
    role: {type: Schema.ObjectId, ref: 'Role'},
    house: {type: Schema.ObjectId, ref: 'House'},
    payment_history: {type: Schema.ObjectId, ref: 'Receipt'}
});

module.exports = User = mongoose.model('User', userSchema);

