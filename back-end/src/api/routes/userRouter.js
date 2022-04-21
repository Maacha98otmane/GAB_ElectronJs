import express from "express";
const router = express.Router();


import {
    addUser,
    login,
    logout

} from "../controllers"

// import {
//     Auth
// } from "../middlewares"

router.post("/login", login);
router.post("/create", addUser)
router.post("/logout", logout);

export {
    router
}