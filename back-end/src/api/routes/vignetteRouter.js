import express from "express";
const router = express.Router();


import {
    payerVignette
} from "../controllers"

// import {
//     Auth
// } from "../middlewares"

router.post("/payer/:id", payerVignette)

export {
    router
}