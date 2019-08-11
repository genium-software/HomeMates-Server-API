const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Permission = require('./Permission');

const roleSchema = new Schema({
  name: {
    type: String,
    enum: ['Owner', 'Tenant'],
    required: [true, 'Name must be filled']
  },
  permissions: { 
      type: Schema.ObjectId, 
      ref: 'Permission' 
    }
});

module.exports = Role = mongoose.model('Role', roleSchema);
