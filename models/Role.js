var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var roleSchema = new Schema({
    name: String,
    permissions: Permission
});

module.exports = Role = mongoose.model("Role", roleSchema);