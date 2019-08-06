var config = require('config');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const db = config.get('mongoURI');

mongoose
    .connect(db, {
        useNewUrlParser: true,
        useCreateIndex: true
    })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err)); //TODO: send it to the front-end so it can be shown if error is happening


var userSchema = new Schema({
    name: String,
    role: Role,
    house: House,
    payment_history: Receipt
});

var roleSchema = new Schema({
    name: String,
    permissions: Permission
});

var permissionSchema = new Schema({
    action: String
});

var houseSchema = new Schema({
    owner: User,
    tenants: User, // Can be more than 1 User
    bills: [{
        current_bill: Bill,
        history_bill: Bill
    }], 
    details: [{
        address: String,
        suburb: String,
        state: String,
        postcode: String
    }] 
});

var billSchema = new Schema({
    category: String,
    due_date: Date,
    due_price: Float32Array,
    receipts: Receipt,
    status: String
})

var receiptSchema = new Schema({
    tenant: User, 
    payment_date: Date.now,
    payment_due: Date,
    price_paid: Float32Array
});

var User = mongoose.model('User', userSchema);
var Role = mongoose.model('Role', roleSchema);
var Permission = mongoose.model("Permission", permissionSchema);
var House = mongoose.model("House", houseSchema);
var Bill = mongoose.model("Bill", billSchema);
var Receipt = mongoose.model("Receipt", receiptSchema);
