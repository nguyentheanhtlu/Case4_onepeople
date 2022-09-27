"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const category_model_1 = __importDefault(require("../models/category.model"));
const products_model_1 = __importDefault(require("../models/products.model"));
class ProductController {
    async formCreateProduct(req, res, next) {
        let categories = await category_model_1.default.find();
        res.render('admin/form', { categories: categories });
    }
    async store(req, res, next) {
        let files = req.files;
        console.log(req.body);
        console.log(files);
        if (files) {
            let product = req.body;
            if (files.image && product.name) {
                let image = files.image;
                image.mv('./public/storage/' + image.name);
                product.image = 'storage/' + image.name;
                const products = new products_model_1.default(product);
                await products.save();
                res.redirect(301, '/shop');
            }
            else {
                res.render('error');
            }
        }
        else {
            res.render('error');
        }
    }
    async productList(req, res, next) {
        let categories = await category_model_1.default.find();
        let product = await products_model_1.default.find().populate('category');
        res.render('admin/product-list', { categories: categories, product: product });
    }
    ;
    async deleteProduct(req, res, next) {
        await products_model_1.default.findByIdAndDelete({ _id: req.params.id });
        res.redirect('/admin/list/product');
    }
    async editProduct(req, res, next) {
        let categories = await category_model_1.default.find();
        let product = await products_model_1.default.findById({ _id: req.params.id });
        res.render('admin/edit-product', { categories: categories, product: product });
    }
    async edit(req, res, next) {
        let data = req.body;
        let product = {
            name: data.name,
            price: data.price,
            author: data.author,
            made_in: data.made_in,
            description: data.description,
            category: data.category
        };
        await products_model_1.default.findByIdAndUpdate(req.params.id, product);
        res.redirect('/admin/list/product');
    }
    ;
}
exports.ProductController = ProductController;
//# sourceMappingURL=product.controller.js.map