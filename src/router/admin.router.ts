import express from "express";
import {Request,Response,NextFunction} from "express";
const adminRouter = express.Router();
import multer from "multer";
import {AdminController} from "../controller/admin.controller";
import { ProductController } from "../controller/product.controller";
import { authLogin } from "../middleware/auth";

const admin = new AdminController();
const product = new ProductController();

// adminRouter.use(authLogin)

adminRouter.get('/admin/list',authLogin,(req, res,next) => {
    admin.showAdminPage(req,res,next);

});
adminRouter.post('/admin/list',authLogin,(req, res,next) => {
    let keyword = req.body.keywords;
    admin.find(req,res,keyword).catch(err=>{
        console.log(err.message)
    })
});
adminRouter.get('/admin/user/update/:id',(req, res, next) => {
    admin.showFormEditUser(req, res, next);
})

adminRouter.post('/admin/user/update/:id',(req, res, next) => {
    admin.updateUser(req, res, next);
})

adminRouter.get('/admin/create/product',authLogin, (req, res, next) => {
    product.formCreateProduct(req,res,next).catch(err=>{
        console.log(err.message)
    });
});

adminRouter.post('/admin/create/product',authLogin, (req, res, next)=>{
    product.store(req,res,next).catch(err=>{
        console.log(err.message)
    })
})

adminRouter.get('/admin/list/product',authLogin,(req, res, next)=>{
    product.productList(req,res,next).catch(err=>{
        console.log(err.message)
    })
})

adminRouter.get('/admin/product/:id/delete',authLogin,(req, res, next)=>{
    product.deleteProduct(req,res,next).catch(err=>{
        console.log(err.message)
    })
})

adminRouter.get('/admin/product/:id/update',authLogin,(req, res, next)=>{
    product.editProduct(req,res,next).catch(err=>{
        console.log(err.message)
    })
});

adminRouter.post('/admin/product/:id/update',authLogin, (req, res, next)=>{
    product.edit(req,res,next).catch(err=>{
        console.log(err.message)
    })
});

export  default adminRouter;