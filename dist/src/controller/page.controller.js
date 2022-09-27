"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageController = void 0;
const products_model_1 = __importDefault(require("../models/products.model"));
const category_model_1 = __importDefault(require("../models/category.model"));
class PageController {
    constructor() {
    }
    showHomePage(req, res, next) {
        res.render('product/index');
    }
    ;
    showBlog(req, res, next) {
        res.render('product/blog');
    }
    ;
    showContact(req, res, next) {
        res.render('product/contact');
    }
    ;
    showBlogDetail(req, res, next) {
        res.render('product/blog-detail');
    }
    ;
    async showShop(req, res, next) {
        let product = await products_model_1.default.find();
        console.log(product);
        res.render('product/shop', { product: product });
    }
    ;
    showMenShop(req, res, next) {
        res.render('product/men');
    }
    ;
    showWomenShop(req, res, next) {
        res.render('product/women');
    }
    ;
    showKidsShop(req, res, next) {
        res.render('product/kids');
    }
    ;
    shoppingCart(req, res, next) {
        res.render('product/shopping-cart');
    }
    ;
    checkOut(req, res, next) {
        res.render('product/check-out');
    }
    ;
    async showProductDetail(req, res, next) {
        let categories = await category_model_1.default.find();
        let product = await products_model_1.default.findById(req.params.id);
        console.log(product);
        res.render('product/product-detail', { categories: categories, product: product });
    }
    ;
}
exports.PageController = PageController;
//# sourceMappingURL=page.controller.js.map