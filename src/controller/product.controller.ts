import {Request,Response,NextFunction} from "express";
import Category from "../models/category.model";
import ProductModel from "../models/products.model";
import {UploadedFile} from "express-fileupload";

export class ProductController{

    async formCreateProduct(req: Request, res: Response, next: NextFunction){
        let categories = await Category.find();
        res.render('admin/form',{categories : categories});
    }


    async store(req: any, res: Response , next : NextFunction) {
        let files = req.files;
        console.log(req.body);
        console.log(files);
        if (files) {
            let product = req.body;
            // @ts-ignore
            if (files.image && product.name) {
                // @ts-ignore
                let image = files.image as UploadedFile;
                image.mv('./src/public/storage/' + image.name);
                product.image = 'storage/' + image.name;
                const products = new ProductModel(product)
                await products.save();
                res.redirect(301, '/admin/list/product');
            } else {
                res.render('error');
            }
        } else {
            res.render('error');
        }
    }

    async productList(req: Request, res: Response, next: NextFunction) {
        let categories = await Category.find();
        let product = await ProductModel.find().populate('category');
        res.render('admin/product-list',{categories : categories, product : product});
    };

    async deleteProduct(req: Request, res: Response, next: NextFunction){
        await ProductModel.findByIdAndDelete({_id : req.params.id});
        res.redirect('/admin/list/product')
    }

    async editProduct(req: Request, res: Response, next: NextFunction){
        let categories = await Category.find();
        let product = await ProductModel.findById({_id : req.params.id});
        res.render('admin/edit-product',{categories : categories , product : product})
    }

    async edit(req: Request, res: Response, next: NextFunction){
        let data = req.body;
        let product = {
            name : data.name,
            price : data.price,
            author : data.author,
            made_in : data.made_in,
            description : data.description,
            category : data.category
        };
        await ProductModel.findByIdAndUpdate(req.params.id,product)
        res.redirect('/admin/list/product')
    };

}