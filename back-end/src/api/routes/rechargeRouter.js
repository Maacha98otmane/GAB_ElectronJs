import express from "express";
const router = express.Router();


import {
    payerRecharge
} from "../controllers"

// import {
//     Auth
// } from "../middlewares"

router.post("/payer/:id", payerRecharge)

export {
    router
}