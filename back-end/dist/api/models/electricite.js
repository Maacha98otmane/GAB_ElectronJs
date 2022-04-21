"use strict";

var mongoose = require('mongoose');

var electriciteSchema = new mongoose.Schema({
  nameCompany: {
    type: String,
    trim: true,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  serial: {
    type: Number,
    required: true
  },
  status: {
    type: Boolean,
    "default": false
  }
}, {
  timestamps: true
});
module.exports = mongoose.model('Electricite', electriciteSchema);