const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require("./User");
const types = require('./types')

const receiptSchema = new Schema({
  tenant: { 
    type: Schema.ObjectId, 
    ref: "User" 
  },
  receipt_date_created: { //Date when receipt is created after splitting.
    type: Date,
    default: Date.now,
    required: true
  },
  payment_date: {
    type: Date
  },
  payment_due: {
    type: Date,
    required: true
  },
  price_paid: Decimal128, 
  status: {
    type: String,
    default: type.billingStatus[0],
    enum: types.billingStatus
  }
});

module.exports = Receipt = mongoose.model('Receipt', receiptSchema);
