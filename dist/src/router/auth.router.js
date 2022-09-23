"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authRouter = express_1.default.Router();
const multer_1 = __importDefault(require("multer"));
const upload = (0, multer_1.default)();
authRouter.get('/register', (req, res) => {
    res.render('login/register');
});
authRouter.get('/login', (req, res) => {
    res.render('login/login');
});
authRouter.get('/shop', (req, res) => {
    res.render('shop/shop');
});
exports.default = authRouter;
//# sourceMappingURL=auth.router.js.map