import express from "express";
const authRouter = express.Router();

import multer from "multer";
const upload = multer();
authRouter.get('/register', (req, res) => {
    res.render('product/login/register')
});
authRouter.get('/login', (req, res) => {
    res.render('product/login/login')
});


export  default authRouter;