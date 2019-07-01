const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    firstName: String,
    lastName: String,
    phoneNumber: Number,
    email: String,
    comics:[{
        type: Schema.Types.ObjectId,
        ref: 'comic'
    }]
})

const Customer = mongoose.model('customer', customerSchema);
module.exports = Customer