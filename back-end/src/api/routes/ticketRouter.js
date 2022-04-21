import express from "express";
const router = express.Router();


import {
   findVoyage,
   payerVoyage,
} from "../controllers"

// import {
//     Auth
// } from "../middlewares"

router.post("/find", findVoyage)
router.post("/payer/:id", payerVoyage)

export {
    router
}