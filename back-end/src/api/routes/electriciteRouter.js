import express from "express";
const router = express.Router();


import {
    createElectricite,
    getElectricite,
    payer
} from "../controllers"

// import {
//     Auth
// } from "../middlewares"

router.post("/create", createElectricite)
router.get("/get", getElectricite)
router.post("/payer/:id", payer)

export {
    router
}