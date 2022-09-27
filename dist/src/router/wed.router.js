"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const page_controller_1 = require("../controller/page.controller");
const wedRouter = express_1.default.Router();
const page = new page_controller_1.PageController();
wedRouter.get('/', (req, res, next) => {
    page.showHomePage(req, res, next);
});
wedRouter.get('/blog', (req, res, next) => {
    page.showBlog(req, res, next);
});
wedRouter.get('/contact', (req, res, next) => {
    page.showContact(req, res, next);
});
wedRouter.get('/page/shopping-cart', (req, res, next) => {
    page.shoppingCart(req, res, next);
});
wedRouter.get('/page/blog-detail', (req, res, next) => {
    page.showBlogDetail(req, res, next);
});
wedRouter.get('/page/check-out', (req, res, next) => {
    page.checkOut(req, res, next);
});
wedRouter.get('/shop', (req, res, next) => {
    page.showShop(req, res, next).catch(err => {
        console.log(err.message);
    });
});
wedRouter.get('/shop/men', (req, res, next) => {
    page.showMenShop(req, res, next);
});
wedRouter.get('/shop/women', (req, res, next) => {
    page.showWomenShop(req, res, next);
});
wedRouter.get('/shop/kids', (req, res, next) => {
    page.showKidsShop(req, res, next);
});
wedRouter.get('/page/:id/product-detail', (req, res, next) => {
    page.showProductDetail(req, res, next).catch(err => {
        console.log(err.message);
    });
});
exports.default = wedRouter;
//# sourceMappingURL=wed.router.js.map