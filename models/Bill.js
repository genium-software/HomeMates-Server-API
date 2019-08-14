const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Receipt = require("./Receipt");
const types = require('./types');

const billSchema = new Schema({
  categories: {
    type: String,
    required: [true, 'Select the relevant categories for your bill'],
    enum: types.billingCategory
  },
  due_date: Date,
  due_price: Schema.Types.Decimal128, // Decimal128 to allow float/2 d.p.
  receipts: {
    type: Schema.ObjectId,
    ref: 'Receipt'
  },
  status: types.billingStatus
});

module.exports = Bill = mongoose.model('Bill', billSchema);
