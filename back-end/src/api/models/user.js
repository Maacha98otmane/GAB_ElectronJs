const mongoose = require('mongoose');
const crypto = require('crypto')
import { v4 as uuidv4 } from 'uuid';
const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    trim: true,
    required: true,
  },
  hashed_cardNumber: {
    type: String,
    trim: true,
    required: true,
  },
  email:{
    type:String,
    trim:true,
    required:true,
    unique:true
  },
  code: {
    type: Number,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  salt:{
    type:String,
    required:true

  }
}, {
  timestamps: true
},{collection:"users"});
//Create virtual champs 'password'
userSchema.virtual('cardNumber')
  .set(function (cardNumber) {
    this._cardNumber = cardNumber;
    this.salt = uuidv4();
    this.hashed_cardNumber = this.cryptPass(cardNumber)
  })
  .get(function () {
    return this._cardNumber
  })
//Create method for crypt password
userSchema.methods = {
  authenticate: function(pass){
    return this.cryptPass(pass) === this.hashed_cardNumber;
  },
  
  cryptPass: function (cardNumber) {
    if (!cardNumber) return '';
    try {
      return crypto.createHmac('sha1', this.salt)
        .update(cardNumber)
        .digest('hex');
    } catch (err) {
      return ''
    }
  }
}
module.exports = mongoose.model('User',userSchema);