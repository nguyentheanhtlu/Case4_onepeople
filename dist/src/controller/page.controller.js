"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageController = exports.localStorage = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const products_model_1 = __importDefault(require("../models/products.model"));
const category_model_1 = __importDefault(require("../models/category.model"));
const user_models_1 = __importDefault(require("../models/schemas/user.models"));
const cart_models_1 = __importDefault(require("../models/schemas/cart.models"));
const node_localstorage_1 = require("node-localstorage");
exports.localStorage = new node_localstorage_1.LocalStorage('./scratch');
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
        let user = exports.localStorage.getItem('token');
        let newdata = JSON.parse(user);
        jsonwebtoken_1.default.verify(newdata.token, process.env.SECRET_KEY, async (err, data) => {
            let user = await user_models_1.default.findOne({ username: data.username });
            let cartuser = await cart_models_1.default.findById({ _id: user.cart_id });
            let html = [];
            let listCart = cartuser.list;
            for (let i = 0; i < listCart.length; i++) {
                let product = await products_model_1.default.findById({ _id: listCart[i] });
                html.push(product);
            }
            ;
            res.render('product/shopping-cart', { Product: html });
        });
    }
    ;
    async showProductDetail(req, res, next) {
        let categories = await category_model_1.default.find();
        let product = await products_model_1.default.findById(req.params.id);
        res.render('product/product-detail', { categories: categories, product: product });
    }
    ;
}
exports.PageController = PageController;
//# sourceMappingURL=page.controller.js.map