const mongoose = require('mongoose');
const {Schema} = mongoose;

const customerSchema = new mongoose.Schema({
  name: {type: String, required: true},
  email: {type: String, required: true},
  phone: {type: String}



})

module.exports = mongoose.model('customers', customerSchema)
