const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Permission = require("./Permission");

const roleSchema = new Schema({
  name: String,
  permissions: { type: Schema.ObjectId, ref: "Permission" }
});

module.exports = Role = mongoose.model("Role", roleSchema);
