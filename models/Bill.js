const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Receipt = require("./Receipt");
const types = require('./types');

const billSchema = new Schema({
  categories: {
    type: String,
    enum: types.billingCategory
  },
  due_date: Date,
  due_price: Number, // Should be Decimal128 (if it supports float)
  receipts: {
    type: Schema.ObjectId,
    ref: 'Receipt'
  },
  status: types.billingStatus
});

module.exports = Bill = mongoose.model('Bill', billSchema);
