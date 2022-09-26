
import express from "express";
import { authController } from "../controller/auth.controller";
import auth from "../middleware/auth.middleware";
import User from "../models/schemas/user.models";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
const authRouter = express.Router();
const AuthController = new authController();
import { authLogin } from "../middleware/auth";
// const { validateUserSignUp } = require("../middleware/validation");
import * as dotenv from "dotenv";
import crypto from 'crypto';

dotenv.config();
const key1 = crypto.randomBytes(32).toString('hex');

import multer from "multer";
import {userValidation, validateUserSignUp} from "../middleware/validation";

const upload = multer();
// authRouter.use(authLogin)

authRouter.get("/register", AuthController.showFormRegister);

// @ts-ignore
authRouter.post("/register", upload.none(), validateUserSignUp, userValidation, AuthController.register);

authRouter.get('/verify',AuthController.verify)
authRouter.get('/checkLogin',AuthController.checkLogin)
authRouter.get("/login", AuthController.showFormLogin);
authRouter.post("/login", upload.none(),AuthController.login)

authRouter.get("/facebook", auth.authenticate("facebook", { scope: "email" }));
authRouter.get(
  "/facebook/callback",
  auth.authenticate("facebook", {
    successRedirect: "/",
    failureRedirect: "/auth/login",
  }),
  (req, res) => {
    res.redirect("/");
  }
);
authRouter.get(
  "/google",
  auth.authenticate("google", { scope: ["profile", "email"] })
);

authRouter.get(
  "/google/callback",
  auth.authenticate("google", {
    successRedirect: "/",
    failureRedirect: "/auth/login",
  }),
  (req, res) => {
    res.redirect("/");
  }
);

export default authRouter;
