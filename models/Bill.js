var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var billSchema = new Schema({
    category: String,
    due_date: Date,
    due_price: Float32Array,
    receipts: Receipt,
    status: String
})

module.exports = Bill = mongoose.model("Bill", billSchema);