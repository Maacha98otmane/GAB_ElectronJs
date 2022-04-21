const mongoose = require('mongoose');
const electriciteSchema = new mongoose.Schema({
  nameCompany: {
    type: String,
    trim: true,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  serial: {
    type: Number,
    required: true,
  },
  status:{
    type:Boolean,
    default:false
  }
}, {
  timestamps: true
});
module.exports = mongoose.model('Electricite',electriciteSchema);