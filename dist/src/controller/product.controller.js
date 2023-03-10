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
        if (files) {
            let product = req.body;
            if (files.image && product.name) {
                let image = files.image;
                image.mv('./src/public/storage/' + image.name);
                product.image = 'storage/' + image.name;
                const products = new products_model_1.default(product);
                await products.save();
                res.redirect(301, '/admin/list/product');
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
        console.log(product);
        res.render('admin/product-list', { categories: categories, product: product });
    }
    ;
    async deleteProduct(req, res, next) {
        await products_model_1.default.findByIdAndDelete({ _id: req.params.id });
        res.redirect('/admin/list/product');
    }
    async editProduct(req, res, next) {
        let categories = await category_model_1.default.find();
        let product = await products_model_1.default.findById({ _id: req.params.id }).populate('category');
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
    async searchProduct(req, res, next) {
        console.log(1);
        let keyword = req.query.keyword;
        console.log(keyword);
        let limit = 9;
        let offset = 0;
        let page = 1;
        let query = req.query.page;
        if (query) {
            page = +query;
            offset = (page - 1) * limit;
        }
        let category = await category_model_1.default.find({ $or: [{ name: { $regex: `${keyword}`, $options: 'i' } }] });
        let product = await products_model_1.default.find({
            $or: [{ name: { $regex: `${keyword}`, $options: 'i', $not: /^admin.*/ } }]
        }).populate('category').limit(limit).skip(offset);
        let totalProduct = await products_model_1.default.countDocuments({});
        let totalPage = Math.ceil(totalProduct / limit);
        res.render('product/shopNoProduct', {
            product: product,
            totalPage: totalPage,
            currentPage: page,
            category: category
        });
    }
}
exports.ProductController = ProductController;
//# sourceMappingURL=product.controller.js.map