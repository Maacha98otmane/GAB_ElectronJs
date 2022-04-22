"use strict";

var mongoose = require('mongoose');

var vignetteSchema = new mongoose.Schema({
  matricule: {
    type: String,
    trim: true,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  fiscal: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});
module.exports = mongoose.model('Vignette', vignetteSchema);