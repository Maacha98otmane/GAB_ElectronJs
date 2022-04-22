"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.payerVignette = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _user = _interopRequireDefault(require("../models/user"));

var _vignette = _interopRequireDefault(require("../models/vignette"));

var EmailSend = require('../helpers/email');

var saveVignette = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req) {
    var newVignette;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            newVignette = new _vignette["default"](req);
            _context.prev = 1;
            _context.next = 4;
            return newVignette.save();

          case 4:
            _context.next = 9;
            break;

          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](1);
            res.status(500).json(_context.t0);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 6]]);
  }));

  return function saveVignette(_x) {
    return _ref.apply(this, arguments);
  };
}();

var payerVignette = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var vignette, user, amountVignette, subj, msg, amountVignette1, subj1, msg1, amountVignette2, subj2, msg2, amountVignette3, subj3, msg3, _amountVignette, _subj, _msg, _amountVignette2, _subj2, _msg2, _amountVignette3, _subj3, _msg3, _amountVignette4, _subj4, _msg4;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _vignette["default"].findOne({
              matricule: req.body.matricule
            });

          case 2:
            vignette = _context2.sent;

            if (!vignette) {
              _context2.next = 7;
              break;
            }

            return _context2.abrupt("return", res.status(400).json({
              status: false,
              message: "Vignette already payed"
            }));

          case 7:
            _context2.prev = 7;
            _context2.next = 10;
            return _user["default"].findOne({
              _id: req.params.id
            });

          case 10:
            user = _context2.sent;

            if (!(req.body.type === "gasoil")) {
              _context2.next = 60;
              break;
            }

            _context2.t0 = true;
            _context2.next = _context2.t0 === req.body.fiscal < 8 ? 15 : _context2.t0 === (req.body.fiscal >= 8 && req.body.fiscal <= 10) ? 27 : _context2.t0 === (req.body.fiscal >= 11 && req.body.fiscal <= 14) ? 37 : _context2.t0 === req.body.fiscal >= 15 ? 47 : 57;
            break;

          case 15:
            amountVignette = 700;

            if (!(user.amount < amountVignette)) {
              _context2.next = 18;
              break;
            }

            return _context2.abrupt("return", res.status(400).json({
              status: false,
              message: "Not enough money"
            }));

          case 18:
            user.amount -= amountVignette;
            _context2.next = 21;
            return user.save();

          case 21:
            subj = "Payment Vignette with Success!";
            msg = "You have paid the bill of ".concat(amountVignette, " DH for a vignette");
            EmailSend.mail(user.email, subj, msg);
            _context2.next = 26;
            return saveVignette(req.body);

          case 26:
            return _context2.abrupt("return", res.status(200).json({
              status: true,
              message: "Amount has been deducted"
            }));

          case 27:
            amountVignette1 = 1500;

            if (!(user.amount < amountVignette1)) {
              _context2.next = 30;
              break;
            }

            return _context2.abrupt("return", res.status(400).json({
              status: false,
              message: "Not enough money"
            }));

          case 30:
            user.amount -= amountVignette1;
            _context2.next = 33;
            return user.save();

          case 33:
            subj1 = "Payment Vignette with Success!";
            msg1 = "You have paid the bill of ".concat(amountVignette1, " DH for a vignette");
            EmailSend.mail(user.email, subj1, msg1);
            return _context2.abrupt("return", res.status(200).json({
              status: true,
              message: "Amount has been deducted"
            }));

          case 37:
            amountVignette2 = 6000;

            if (!(user.amount < amountVignette2)) {
              _context2.next = 40;
              break;
            }

            return _context2.abrupt("return", res.status(400).json({
              status: false,
              message: "Not enough money"
            }));

          case 40:
            user.amount -= amountVignette2;
            _context2.next = 43;
            return user.save();

          case 43:
            subj2 = "Payment Vignette with Success!";
            msg2 = "You have paid the bill of ".concat(amountVignette2, " DH for a vignette");
            EmailSend.mail(user.email, subj2, msg2);
            return _context2.abrupt("return", res.status(200).json({
              status: true,
              message: "Amount has been deducted"
            }));

          case 47:
            amountVignette3 = 20000;

            if (!(user.amount < amountVignette3)) {
              _context2.next = 50;
              break;
            }

            return _context2.abrupt("return", res.status(400).json({
              status: false,
              message: "Not enough money"
            }));

          case 50:
            user.amount -= amountVignette3;
            _context2.next = 53;
            return user.save();

          case 53:
            subj3 = "Payment Vignette with Success!";
            msg3 = "You have paid the bill of ".concat(amountVignette3, " DH for a vignette");
            EmailSend.mail(user.email, subj3, msg3);
            return _context2.abrupt("return", res.status(200).json({
              status: true,
              message: "Amount has been deducted"
            }));

          case 57:
            console.log("Sorry, we are out of ".concat(expr, "."));

          case 58:
            _context2.next = 104;
            break;

          case 60:
            _context2.t1 = true;
            _context2.next = _context2.t1 === req.body.fiscal < 8 ? 63 : _context2.t1 === (req.body.fiscal >= 8 && req.body.fiscal <= 10) ? 73 : _context2.t1 === (req.body.fiscal >= 11 && req.body.fiscal <= 14) ? 83 : _context2.t1 === req.body.fiscal >= 15 ? 93 : 103;
            break;

          case 63:
            _amountVignette = 350;

            if (!(user.amount < _amountVignette)) {
              _context2.next = 66;
              break;
            }

            return _context2.abrupt("return", res.status(400).json({
              status: false,
              message: "Not enough money"
            }));

          case 66:
            user.amount -= _amountVignette;
            _context2.next = 69;
            return user.save();

          case 69:
            _subj = "Payment Vignette with Success!";
            _msg = "You have paid the bill of ".concat(_amountVignette, " DH for a vignette");
            EmailSend.mail(user.email, _subj, _msg);
            return _context2.abrupt("return", res.status(200).json({
              status: true,
              message: "Amount has been deducted"
            }));

          case 73:
            _amountVignette2 = 650;

            if (!(user.amount < _amountVignette2)) {
              _context2.next = 76;
              break;
            }

            return _context2.abrupt("return", res.status(400).json({
              status: false,
              message: "Not enough money"
            }));

          case 76:
            user.amount -= _amountVignette2;
            _context2.next = 79;
            return user.save();

          case 79:
            _subj2 = "Payment Vignette with Success!";
            _msg2 = "You have paid the bill of ".concat(_amountVignette2, " DH for a vignette");
            EmailSend.mail(user.email, _subj2, _msg2);
            return _context2.abrupt("return", res.status(200).json({
              status: true,
              message: "Amount has been deducted"
            }));

          case 83:
            _amountVignette3 = 3000;

            if (!(user.amount < _amountVignette3)) {
              _context2.next = 86;
              break;
            }

            return _context2.abrupt("return", res.status(400).json({
              status: false,
              message: "Not enough money"
            }));

          case 86:
            user.amount -= _amountVignette3;
            _context2.next = 89;
            return user.save();

          case 89:
            _subj3 = "Payment Vignette with Success!";
            _msg3 = "You have paid the bill of ".concat(_amountVignette3, " DH for a vignette");
            EmailSend.mail(user.email, _subj3, _msg3);
            return _context2.abrupt("return", res.status(200).json({
              status: true,
              message: "Amount has been deducted"
            }));

          case 93:
            _amountVignette4 = 8000;

            if (!(user.amount < _amountVignette4)) {
              _context2.next = 96;
              break;
            }

            return _context2.abrupt("return", res.status(400).json({
              status: false,
              message: "Not enough money"
            }));

          case 96:
            user.amount -= _amountVignette4;
            _context2.next = 99;
            return user.save();

          case 99:
            _subj4 = "Payment Vignette with Success!";
            _msg4 = "You have paid the bill of ".concat(_amountVignette4, " DH for a vignette");
            EmailSend.mail(user.email, _subj4, _msg4);
            return _context2.abrupt("return", res.status(200).json({
              status: true,
              message: "Amount has been deducted"
            }));

          case 103:
            console.log("Sorry, we are out of ".concat(expr, "."));

          case 104:
            _context2.next = 109;
            break;

          case 106:
            _context2.prev = 106;
            _context2.t2 = _context2["catch"](7);
            res.status(500).json(_context2.t2);

          case 109:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[7, 106]]);
  }));

  return function payerVignette(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();

exports.payerVignette = payerVignette;