import express from "express";
const wedRouter = express.Router();

import multer from "multer";
const upload = multer();

wedRouter.get('/', (req, res) => {
    res.render('product/shop/shop')
});
wedRouter.get('/product/details', (req, res) => {
    res.render('product/shop/detail')
});

export  default wedRouter;