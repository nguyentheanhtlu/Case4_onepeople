import express from "express";
const adminRouter = express.Router();

import multer from "multer";
const upload = multer();

adminRouter.get('/admin/list', (req, res) => {
    res.render('admin/table')
});
adminRouter.get('/admin/create/product', (req, res) => {
    res.render('admin/form')
});

export  default adminRouter;