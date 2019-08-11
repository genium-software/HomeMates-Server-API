const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("./User");
const Bill = require("./Bill");

const houseSchema = new Schema({
  owner: { type: Schema.ObjectId, ref: "User" },
  account: {
    bsb: Number,
    accNumber: Number
  },
  tenants: [{ type: Schema.ObjectId, ref: "User" }],
  bills: [
    {
      current_bill: { type: Schema.ObjectId, ref: "Bill" },
      history_bill: { type: Schema.ObjectId, ref: "Bill" }
    }
  ],
  details: [
    {
      address: String,
      suburb: String,
      state: String,
      postcode: String
    }
  ]
});

module.exports = House = mongoose.model("House", houseSchema);
