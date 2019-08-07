var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: String,
    role: Role,
    house: House,
    payment_history: Receipt
});

module.exports = User = mongoose.model('User', userSchema);

