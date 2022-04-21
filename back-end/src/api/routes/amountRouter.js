import express from "express";
const router = express.Router();


import {
    getAmount ,minusAmount

} from "../controllers"

// import {
//     Auth
// } from "../middlewares"

router.get("/get/:id", getAmount)
router.post("/minus/:id", minusAmount)

export { router }