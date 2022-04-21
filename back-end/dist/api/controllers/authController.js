"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logout = exports.login = void 0;

var _user = _interopRequireDefault(require("../models/user.js"));

var _helpers = require("../helpers");

var logger = require('../../config/winston');

var login = function login(req, res) {
  var _req$body = req.body,
      fullName = _req$body.fullName,
      code = _req$body.code,
      cardNumber = _req$body.cardNumber;

  _user["default"].findOne({
    fullName: fullName
  }, function (err, result) {
    if (err || !result) {
      return res.status(400).json({
        isLogged: false,
        error: 'User not Found with this email@'
      });
    }

    if (!result.authenticate(cardNumber)) {
      return res.status(401).json({
        isLogged: false,
        error: 'Card Number and Code dont Match !'
      });
    }

    if (result.code !== code) {
      return res.status(401).json({
        isLogged: false,
        error: 'Code is not correct !'
      });
    }

    logger.info("login: ".concat(result.fullName, " logged!"));
    var token = (0, _helpers.createToken)({
      id: result._id,
      amount: result.amount
    }, "User123");
    res.cookie('token', token, {
      expires: new Date(Date.now() + 4 * 3600000)
    });
    return token ? res.status(200).json({
      isLogged: true,
      token: token
    }) : res.status(500).json({
      isLogged: false,
      error: "cant create token"
    });
  });
};

exports.login = login;

var logout = function logout(req, res) {
  res.clearCookie('token');
  res.json({
    message: "Logout"
  });
};

exports.logout = logout;