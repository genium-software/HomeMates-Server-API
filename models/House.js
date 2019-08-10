var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var User = require('./User');
var Bill = require('./Bill');

var houseSchema = new Schema({
    owner: {type: Schema.ObjectId, ref: 'User'},
    account: {
        bsb: Number,
        accNumber: Number,
    },
    tenants: [{type: Schema.ObjectId, ref: 'User'}], 
    bills: [{
        current_bill: {type: Schema.ObjectId, ref: 'Bill'},
        history_bill: {type: Schema.ObjectId, ref: 'Bill'}
    }], 
    details: [{
        address: String,
        suburb: String,
        state: String,
        postcode: String
    }] 
});

module.exports = House = mongoose.model("House", houseSchema);

