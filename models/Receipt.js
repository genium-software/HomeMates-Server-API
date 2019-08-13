const mongoose = require('mongoose');
const Schema = mongoose.Schema;
<<<<<<< Updated upstream
const User = require('./User');

const receiptSchema = new Schema({
  tenant: { 
      type: Schema.ObjectId, 
      ref: 'User' 
    },
  payment_date: Date,
  payment_due: Date,
  price_paid: Number // Change to Decimal128 if Decimal128 datatype provides floats (it should)
=======
const User = require("./User");
const types = require('./types')

const receiptSchema = new Schema({
  tenant: { 
    type: Schema.ObjectId, 
    ref: "User" 
  },
  receipt_date_created: { //Date when receipt is created after splitting.
    type: Date,
    default: Date.now
  },
  payment_date: {
    type: Date
  },
  payment_due: {
    type: Date,
    required: true
  },
  price_paid: Number, // Change to Decimal128 if Decimal128 datatype provides floats (it should)
  status: {
    type: String,
    default: type.billingStatus[0],
    enum: types.billingStatus
  }
>>>>>>> Stashed changes
});

module.exports = Receipt = mongoose.model('Receipt', receiptSchema);
