"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.payerVoyage = exports.findVoyage = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _user = _interopRequireDefault(require("../models/user"));

var _distanceProvider = require("../helpers/distanceProvider");

var EmailSend = require('../helpers/email');

var findVoyage = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var distance, price, voyage;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _distanceProvider.getDistance)(req.body.from, req.body.to);

          case 2:
            distance = _context.sent;
            price = distance * 0.5;
            voyage = {
              Km: distance,
              Prix: price,
              From: req.body.from,
              To: req.body.to
            };
            res.status(200).json({
              status: true,
              voyage: voyage
            });

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function findVoyage(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.findVoyage = findVoyage;

var payerVoyage = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var distance, price, user, subj, msg;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _distanceProvider.getDistance)(req.body.from, req.body.to);

          case 2:
            distance = _context2.sent;
            price = distance * 0.5;
            _context2.prev = 4;
            _context2.next = 7;
            return _user["default"].findOne({
              _id: req.params.id
            });

          case 7:
            user = _context2.sent;

            if (!(user.amount < price)) {
              _context2.next = 10;
              break;
            }

            return _context2.abrupt("return", res.status(400).json({
              status: false,
              message: "Not enough money"
            }));

          case 10:
            user.amount -= price;
            _context2.next = 13;
            return user.save();

          case 13:
            subj = "Payment Voyage with Success!";
            msg = "You have paid the bill of ".concat(price, " DH for a voyage from ").concat(req.body.from, " to ").concat(req.body.to);
            EmailSend.mail(user.email, subj, msg);
            res.status(200).json({
              status: true,
              message: "Amount has been deducted"
            });
            _context2.next = 22;
            break;

          case 19:
            _context2.prev = 19;
            _context2.t0 = _context2["catch"](4);
            res.status(500).json(_context2.t0);

          case 22:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[4, 19]]);
  }));

  return function payerVoyage(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.payerVoyage = payerVoyage;