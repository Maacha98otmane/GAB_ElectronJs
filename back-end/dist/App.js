"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _expressValidator = _interopRequireDefault(require("express-validator"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _db = _interopRequireDefault(require("./config/db"));

var _routes = require("./api/routes");

require("dotenv").config();

var host = process.env.HOST;
var port = process.env.PORT || 8080;
var app = (0, _express["default"])(); // //mid

app.use(_express["default"].json());
app.use((0, _cors["default"])());
app.use((0, _expressValidator["default"])());
app.use((0, _cookieParser["default"])());
app.use(_express["default"].urlencoded({
  extended: true
}));
app.use("/api/user", _routes.userRouter);
app.use("/api/cart", _routes.cartRouter);
app.use("/api/order", _routes.orderRouter);
app.use("/api/electricite", _routes.electriciteRouter);
app.use("/api/amount", _routes.amountRouter);
app.use("/api/stripe", _routes.stripeRouter);
app.use("/api/ticket", _routes.ticketRouter);
app.use("/api/recharge", _routes.rechargeRouter);
app.listen(port, function () {
  console.log("Running on http://".concat(host, ":").concat(port));
});
(0, _db["default"])();