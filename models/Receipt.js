var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var receiptSchema = new Schema({
    tenant: User, 
    payment_date: Date.now,
    payment_due: Date,
    price_paid: Float32Array
});

module.exports = Receipt = mongoose.model("Receipt", receiptSchema);