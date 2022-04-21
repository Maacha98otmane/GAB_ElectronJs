"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.payer = exports.getElectricite = exports.createElectricite = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _user = _interopRequireDefault(require("../models/user"));

var _electricite = _interopRequireDefault(require("../models/electricite"));

var EmailSend = require('../helpers/email');

var createElectricite = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var newElectricite, savedElectricite;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            newElectricite = new _electricite["default"](req.body);
            _context.prev = 1;
            _context.next = 4;
            return newElectricite.save();

          case 4:
            savedElectricite = _context.sent;
            res.status(200).json(savedElectricite);
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            res.status(500).json(_context.t0);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 8]]);
  }));

  return function createElectricite(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createElectricite = createElectricite;

var getElectricite = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var electricite;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _electricite["default"].findOne({
              serial: req.body.serial
            });

          case 3:
            electricite = _context2.sent;
            res.status(200).json({
              status: true,
              electricite: electricite
            });
            _context2.next = 10;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            res.status(500).json(_context2.t0);

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));

  return function getElectricite(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getElectricite = getElectricite;

var payer = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var electricite, user, subj, msg;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _electricite["default"].findOne({
              _id: req.params.id
            });

          case 3:
            electricite = _context3.sent;

            if (!(electricite.status === false)) {
              _context3.next = 22;
              break;
            }

            _context3.next = 7;
            return _user["default"].findOne({
              _id: req.body.userId
            });

          case 7:
            user = _context3.sent;

            if (!(user.amount < electricite.amount)) {
              _context3.next = 10;
              break;
            }

            return _context3.abrupt("return", res.status(400).json({
              status: false,
              message: "Not enough money"
            }));

          case 10:
            user.amount -= electricite.amount;
            _context3.next = 13;
            return user.save();

          case 13:
            electricite.status = true;
            _context3.next = 16;
            return electricite.save();

          case 16:
            subj = "Payment Eau & Electricite with Success!";
            msg = "You have paid the bill of ".concat(electricite.amount, " DH for the serial number ").concat(electricite.serial);
            EmailSend.mail(user.email, subj, msg);
            res.status(200).json({
              status: true,
              message: "Amount has been deducted"
            });
            _context3.next = 23;
            break;

          case 22:
            res.status(400).json({
              status: false,
              message: "This bill has already been paid"
            });

          case 23:
            _context3.next = 28;
            break;

          case 25:
            _context3.prev = 25;
            _context3.t0 = _context3["catch"](0);
            res.status(500).json(_context3.t0);

          case 28:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 25]]);
  }));

  return function payer(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.payer = payer;