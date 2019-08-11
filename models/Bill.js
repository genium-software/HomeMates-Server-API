const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Receipt = require('./Receipt');

const billSchema = new Schema({
  category: String,
  due_date: Date,
  due_price: Number, // Should be Decimal128 (if it supports float)
  receipts: {
    type: Schema.ObjectId,
    ref: 'Receipt'
  },
  status: String
});

module.exports = Bill = mongoose.model('Bill', billSchema);
