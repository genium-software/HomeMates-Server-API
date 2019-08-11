const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Role = require("./Role");
const House = require("./House");
const Receipt = require("./Receipt");

const userSchema = new Schema({
  name: String,
  role: { type: Schema.ObjectId, ref: "Role" },
  house: { type: Schema.ObjectId, ref: "House" },
  payment_history: { type: Schema.ObjectId, ref: "Receipt" }
});

module.exports = User = mongoose.model("User", userSchema);
