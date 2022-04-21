"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.payerRecharge = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _user = _interopRequireDefault(require("../models/user"));

var EmailSend = require('../helpers/email');

var payerRecharge = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var user, subj, msg;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _user["default"].findOne({
              _id: req.params.id
            });

          case 3:
            user = _context.sent;

            if (!(user.amount < req.body.amount)) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return", res.status(400).json({
              status: false,
              message: "Not enough money"
            }));

          case 6:
            user.amount -= req.body.amount;
            _context.next = 9;
            return user.save();

          case 9:
            subj = "Recharge Telephone with Success!";
            msg = "You have paid ".concat(req.body.amount, " DH for the telephone number ").concat(req.body.number, " operator ").concat(req.body.operator);
            EmailSend.mail(user.email, subj, msg);
            res.status(200).json({
              status: true,
              message: "Amount has been deducted"
            });
            _context.next = 18;
            break;

          case 15:
            _context.prev = 15;
            _context.t0 = _context["catch"](0);
            res.status(500).json(_context.t0);

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 15]]);
  }));

  return function payerRecharge(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.payerRecharge = payerRecharge;