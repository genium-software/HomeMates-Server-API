const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const House = require("./House");
const Receipt = require("./Receipt");
const types = require('./types');

const userSchema = new Schema({
  name: String,
  role: { 
    type: String,
    required: [true, 'Role is not assigned'],
    enum: types.roles
  },
  house: { 
    type: Schema.ObjectId, 
    ref: "House", 
  },
  payment_history: [{ 
    type: Schema.ObjectId, 
    ref: "Receipt" 
  }]
});

module.exports = User = mongoose.model("User", userSchema);
