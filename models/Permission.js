const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const permissionSchema = new Schema({
  action: String
});

module.exports = Permission = mongoose.model("Permission", permissionSchema);
