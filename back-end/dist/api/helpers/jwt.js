"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyToken = exports.createToken = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

require("dotenv").config(); // generate tokens :


var createToken = function createToken() {
  var payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var role = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  if (!payload) return null;
  if (!role) return null;
  return _jsonwebtoken["default"].sign(payload, role, {
    expiresIn: "1h"
  });
};

exports.createToken = createToken;

var verifyToken = function verifyToken() {
  var token = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var role = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  if (!token) return null;
  if (!role) return null;

  try {
    return _jsonwebtoken["default"].verify(token, role);
  } catch (err) {
    return null;
  }
};

exports.verifyToken = verifyToken;