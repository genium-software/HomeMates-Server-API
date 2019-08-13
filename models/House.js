const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./User');
const Bill = require('./Bill');

const houseSchema = new Schema({
  owner: { 
    type: Schema.ObjectId, 
    ref: "User" 
  },
  account: {
    bsb: Number,
    accNumber: Number
  },
  tenants: [
    { 
      type: Schema.ObjectId, 
      ref: "User" 
    }
  ],
  bills: [
    {
      current_bill: { 
        type: Schema.ObjectId, 
        ref: "Bill" 
      },
      history_bill: { 
        type: Schema.ObjectId, 
        ref: "Bill" 
      }
    }
  ],
  //This details of address is Australia only! Need to be refactored later if goes international :)
  details: [
    {
      address: { 
        type: String,
        require: [true, 'Addess is not filled']
      },
      suburb: {
        type: String,
        require: [true, 'Suburb is not filled']
      },
      state: { 
        type: String,
        enum: ['NSW', 'WA', 'QLD', 'VIC', 'SA', 'TAS', 'NT']
      },
      postcode: {
        type: Number,
        minlength: [4, 'Invalid Postcode: Less than 4'],
        maxlength: [4, 'Invalid Postcode: Over than 4']
      }
    }
  ]
});

module.exports = House = mongoose.model('House', houseSchema);
