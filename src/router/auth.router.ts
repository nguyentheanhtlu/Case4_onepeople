import express from "express";
const authRouter = express.Router();

import multer from "multer";
const upload = multer();
authRouter.get('/register', (req, res) => {
    res.render('login/register')
});
authRouter.get('/login', (req, res) => {
    res.render('login/login')
});
authRouter.get('/shop', (req, res) => {
    res.render('shop/shop')
})


export  default authRouter;