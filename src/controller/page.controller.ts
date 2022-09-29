import {Request,Response,NextFunction} from "express";
import ProductModel from "../models/products.model";
import Category from "../models/category.model";
import User from "../models/schemas/user.models";

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
        let limit = 9;
        let offset = 0;
        let page = 1;
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
        console.log(categories)
        res.render('product/product-detail',{categories : categories , product : product})
    };

    async find(req,res,keyword){
        let keywords = String(keyword)
        const data = await ProductModel.find({ name: { $regex: keywords, $options: "i" } });
        res.status(200).json(data);
    }
}