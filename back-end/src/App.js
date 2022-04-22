import express from "express";
import cors from "cors";
import expressvalidator from "express-validator";
import cookieParser from "cookie-parser";
require("dotenv").config();
import connectDB from "./config/db";
import { 
         
          orderRouter,
          stripeRouter,
          cartRouter,
          electriciteRouter,
          userRouter,
          amountRouter,
          ticketRouter,
          vignetteRouter,
          rechargeRouter
        
        } from './api/routes'
const host = process.env.HOST;
const port = process.env.PORT ||8080;

const app = express();

// //mid
app.use(express.json());
app.use(cors())
app.use(expressvalidator());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);
app.use("/api/electricite", electriciteRouter);
app.use("/api/amount", amountRouter);
app.use("/api/stripe", stripeRouter);
app.use("/api/ticket", ticketRouter);
app.use("/api/recharge", rechargeRouter);
app.use("/api/vignette", vignetteRouter);

app.listen(port, () => {
  console.log(`Running on http://${host}:${port}`);
});
connectDB()
