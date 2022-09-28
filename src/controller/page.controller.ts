import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from "express";
import ProductModel from "../models/products.model";
import Category from "../models/category.model";
import User from '../models/schemas/user.models';
import Cart from '../models/schemas/cart.models';
import { LocalStorage } from 'node-localstorage';
export const localStorage = new LocalStorage('./scratch');


export class PageController {
    constructor() {
    }

    showHomePage(req: Request, res: Response, next: NextFunction) {
        res.render('product/index');
    };

    showBlog(req: Request, res: Response, next: NextFunction){
        res.render('product/blog');
    };

    showContact(req: Request, res: Response, next: NextFunction){
        res.render('product/contact');
    };

    showBlogDetail(req: Request, res: Response, next: NextFunction){
        res.render('product/blog-detail');
    };

    async showShop(req: Request, res: Response, next: NextFunction){
        let product = await ProductModel.find();
        console.log(product)
        res.render('product/shop', {product : product});
    };

    showMenShop(req: Request, res: Response, next: NextFunction){
        res.render('product/men');
    };

    showWomenShop(req: Request, res: Response, next: NextFunction){
        res.render('product/women');
    };

    showKidsShop(req: Request, res: Response, next: NextFunction){
        res.render('product/kids');
    };

    shoppingCart(req: Request, res: Response, next: NextFunction) {
        let user = localStorage.getItem('token')
        // console.log(user);
        let newdata = JSON.parse(user);
        // console.log(newdata);
        jwt.verify(newdata.token, process.env.SECRET_KEY, async (err, data) => {
          // console.log(data);
          let user = await User.findOne({ username: data.username })
        //   console.log(user.cart_id);
            let cartuser = await Cart.findById({ _id: user.cart_id });
            let html = [];
            let listCart = cartuser.list
            for (let i = 0; i < listCart.length; i++) {
                let product = await ProductModel.findById({ _id: listCart[i] })
                  html.push(product)
            }
         ;
            res.render('product/shopping-cart', {Product: html});
        })
      
    };

    checkOut(req: Request, res: Response, next: NextFunction){
        res.render('product/check-out');
    };

    async showProductDetail(req: Request, res: Response, next: NextFunction){
        let categories = await Category.find();
        let product = await ProductModel.findById(req.params.id);
        console.log(product)
        res.render('product/product-detail',{categories : categories , product : product})
    };
}