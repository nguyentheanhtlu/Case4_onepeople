import { checkLogin } from './../middleware/auth.checkCookie';
import express from "express";
import multer from "multer";
const upload = multer();

const wedRouter = express.Router();

wedRouter.get('/', (req, res) => {
    res.render('product/shop/shop')
});
wedRouter.get('/product/details', (req, res) => {
    res.render('product/shop/detail')
});

export  default wedRouter;