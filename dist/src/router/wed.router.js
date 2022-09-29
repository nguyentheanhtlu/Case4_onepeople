"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.localStorage = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const express_1 = __importDefault(require("express"));
const page_controller_1 = require("../controller/page.controller");
const checkPermission_middleware_1 = require("../middleware/checkPermission.middleware");
const node_localstorage_1 = require("node-localstorage");
exports.localStorage = new node_localstorage_1.LocalStorage("./scratch");
const multer_1 = __importDefault(require("multer"));
const user_models_1 = __importDefault(require("../models/schemas/user.models"));
const cart_models_1 = __importDefault(require("../models/schemas/cart.models"));
const upload = (0, multer_1.default)();
const wedRouter = express_1.default.Router();
const page = new page_controller_1.PageController();
wedRouter.post("/page/check-out", (req, res, next) => {
    let totalMoney = req.body;
    let user = exports.localStorage.getItem("token");
    let newdata = JSON.parse(user);
    jsonwebtoken_1.default.verify(newdata.token, process.env.SECRET_KEY, async (err, data) => {
        let user = await user_models_1.default.findOne({ username: data.username });
        let cartuser = await cart_models_1.default.findById({ _id: user.cart_id });
        await cart_models_1.default.findOneAndUpdate({ _id: user.cart_id }, { totalMoney: totalMoney.total });
    });
    res.status(200).json(totalMoney);
});
wedRouter.get("/page/check-out", (req, res, next) => {
    let a;
    let user = exports.localStorage.getItem("token");
    console.log(user);
    let newdata = JSON.parse(user);
    jsonwebtoken_1.default.verify(newdata.token, process.env.SECRET_KEY, async (err, data) => {
        let user = await user_models_1.default.findOne({ username: data.username });
        let cartuser = await cart_models_1.default.findById({ _id: user.cart_id });
        a = cartuser.totalMoney;
        res.render('product/check-out', { total: a });
    });
});
wedRouter.post("/page/pay", (req, res, next) => {
    let datas = req.body;
    let user = exports.localStorage.getItem("token");
    let newdata = JSON.parse(user);
    jsonwebtoken_1.default.verify(newdata.token, process.env.SECRET_KEY, async (err, data) => {
        let user = await user_models_1.default.findOne({ username: data.username });
        console.log(user.cart_id);
        await user_models_1.default.findOneAndUpdate({ username: data.username }, { address: datas.address, phone: datas.phone });
        res.status(200).json(data);
    });
});
wedRouter.get("/", (req, res, next) => {
    page.showHomePage(req, res, next);
});
wedRouter.get("/blog", (req, res, next) => {
    page.showBlog(req, res, next);
});
wedRouter.get("/contact", (req, res, next) => {
    page.showContact(req, res, next);
});
wedRouter.get("/page/shopping-cart", (req, res, next) => {
    page.shoppingCart(req, res, next);
});
wedRouter.get("/page/blog-detail", (req, res, next) => {
    page.showBlogDetail(req, res, next);
});
wedRouter.get("/shop", (req, res, next) => {
    page.showShop(req, res, next).catch((err) => {
        console.log(err.message);
    });
});
wedRouter.post('/shop/search', async (req, res, next) => {
    let keyword = req.body.keyword;
    page.find(req, res, keyword).catch(err => {
        console.log(err.message);
    });
});
wedRouter.get("/shop/men", (req, res, next) => {
    page.showMenShop(req, res, next);
});
wedRouter.get("/shop/women", (req, res, next) => {
    page.showWomenShop(req, res, next);
});
wedRouter.get("/shop/kids", (req, res, next) => {
    page.showKidsShop(req, res, next);
});
wedRouter.get("/product/:id/product-detail", (req, res, next) => {
    page.showProductDetail(req, res, next).catch((err) => {
        console.log(err.message);
    });
});
wedRouter.post("/get-cart-items", (req, res, next) => {
    let user = exports.localStorage.getItem("token");
    let newdata = JSON.parse(user);
    jsonwebtoken_1.default.verify(newdata.token, process.env.SECRET_KEY, async (err, data) => {
        let user = await user_models_1.default.findOne({ username: data.username });
        let cartuser = await cart_models_1.default.findById({ _id: user.cart_id });
        let listCart = cartuser.list;
        res.status(200).json(listCart.length);
    });
});
wedRouter.post("/product/cart", checkPermission_middleware_1.authLoginUser, (req, res, next) => {
    let idPr = req.body.idProduct;
    let user = exports.localStorage.getItem("token");
    let newdata = JSON.parse(user);
    jsonwebtoken_1.default.verify(newdata.token, process.env.SECRET_KEY, async (err, data) => {
        let user = await user_models_1.default.findOne({ username: data.username });
        let cartuser = await cart_models_1.default.findById({ _id: user.cart_id });
        let listCart = cartuser.list;
        if (cartuser.list.indexOf(idPr) === -1) {
            cartuser.list.push(idPr);
            await cart_models_1.default.findByIdAndUpdate(user.cart_id, { list: listCart });
        }
        res.status(200).json({ datass: cartuser.list.length });
    });
});
wedRouter.get("/product/cart/payment", (req, res, next) => {
    let user = exports.localStorage.getItem("token");
    let newdata = JSON.parse(user);
    jsonwebtoken_1.default.verify(newdata.token, process.env.SECRET_KEY, async (err, data) => {
        let user = await user_models_1.default.findOne({ username: data.username });
        let cartuser = await cart_models_1.default.findById({ _id: user.cart_id });
        let listCart = cartuser.list;
        if (!user.address || !user.phone) {
            res.render("product/dat-hang");
        }
    });
});
exports.default = wedRouter;
//# sourceMappingURL=wed.router.js.map