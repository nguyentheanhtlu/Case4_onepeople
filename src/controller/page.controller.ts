import {Request,Response,NextFunction} from "express";
import ProductModel from "../models/products.model";
import Category from "../models/category.model";

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
        let limit = 10;
        let offset = 0;
        let page = 1
        let query = req.query.page;
        if(query){
            page = +query;
            offset = (page - 1)*limit;
        }
        let product = await ProductModel.find().limit(limit).skip(offset);
        let totalProduct = await ProductModel.countDocuments({});
        let totalPage = Math.ceil(totalProduct/limit);
        res.render('product/shop', {
            product : product,
            totalPage : totalPage,
            currentPage : page
        });
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

    shoppingCart(req: Request, res: Response, next: NextFunction){
        res.render('product/shopping-cart');
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