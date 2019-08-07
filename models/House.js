var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var houseSchema = new Schema({
    owner: User,
    tenants: User, // Can be more than 1 User
    bills: [{
        current_bill: Bill,
        history_bill: Bill
    }], 
    details: [{
        address: String,
        suburb: String,
        state: String,
        postcode: String
    }] 
});

module.exports = House = mongoose.model("House", houseSchema);

