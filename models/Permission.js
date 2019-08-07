var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var permissionSchema = new Schema({
    action: String
});

module.exports = Permission = mongoose.model("Permission", permissionSchema);
