"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.minusAmount = exports.getAmount = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _user = _interopRequireDefault(require("../models/user"));

var getAmount = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var user;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _user["default"].findOne({
              _id: req.params.id
            }, {
              amount: 1
            });

          case 3:
            user = _context.sent;
            res.status(200).json({
              status: true,
              user: user
            });
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            res.status(500).json(_context.t0);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));

  return function getAmount(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getAmount = getAmount;

var minusAmount = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var amount;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _user["default"].findOne({
              _id: req.params.id
            });

          case 3:
            amount = _context2.sent;

            if (!(amount.amount < req.body.amount)) {
              _context2.next = 6;
              break;
            }

            return _context2.abrupt("return", res.status(400).json({
              status: false,
              message: "Not enough money"
            }));

          case 6:
            amount.amount -= req.body.amount;
            _context2.next = 9;
            return amount.save();

          case 9:
            res.status(200).json({
              status: true,
              message: "Amount has been deducted"
            });
            _context2.next = 15;
            break;

          case 12:
            _context2.prev = 12;
            _context2.t0 = _context2["catch"](0);
            res.status(500).json(_context2.t0);

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 12]]);
  }));

  return function minusAmount(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.minusAmount = minusAmount;