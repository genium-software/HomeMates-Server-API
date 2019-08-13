const mongoose = require('mongoose');
const Schema = mongoose.Schema;
<<<<<<< Updated upstream
const Role = require('./Role');
const House = require('./House');
const Receipt = require('./Receipt');
=======
const Role = require("./Role");
const House = require("./House");
const Receipt = require("./Receipt");
const types = require('./types');
>>>>>>> Stashed changes

const userSchema = new Schema({
  name: String,
  role: { 
<<<<<<< Updated upstream
      type: Schema.ObjectId, 
      ref: 'Role' 
    },
  house: { 
      type: Schema.ObjectId, 
      ref: 'House' 
    },
  payment_history: { 
      type: Schema.ObjectId, 
      ref: 'Receipt' 
    }
=======
    type: String,
    required: [true, 'Role is not assigned'],
    enum: types.roles
  },
  house: { 
    type: Schema.ObjectId, 
    ref: "House", 
  },
  payment_history: { 
    type: Schema.ObjectId, 
    ref: "Receipt" 
  }
>>>>>>> Stashed changes
});

module.exports = User = mongoose.model("User", userSchema);
