import express from "express";
import { login,logout,register } from '../controllers/userController.js';
import {isAuthorized} from "../middlewares/auths.js"
//import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

 router.post("/register", register);
 router.post("/login", login);
 router.get("/logout",isAuthorized, logout);
// router.get("/logout", isAuthenticated, logout);
// router.get("/getuser", isAuthenticated, getUser);

export default router;