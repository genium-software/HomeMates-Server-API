const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("./User");

const receiptSchema = new Schema({
  tenant: { type: Schema.ObjectId, ref: "User" },
  payment_date: Date,
  payment_due: Date,
  price_paid: Number // Change to Decimal128 if Decimal128 datatype provides floats (it should)
});

module.exports = Receipt = mongoose.model("Receipt", receiptSchema);
