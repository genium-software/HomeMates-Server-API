var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Permission = require('./Permission');

var roleSchema = new Schema({
    name: String,
    permissions: {type: Schema.ObjectId, ref: 'Permission'}
});

module.exports = Role = mongoose.model("Role", roleSchema);