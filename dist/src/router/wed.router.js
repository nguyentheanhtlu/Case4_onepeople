"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const upload = (0, multer_1.default)();
const wedRouter = express_1.default.Router();
wedRouter.get('/', (req, res) => {
    res.render('product/shop/shop');
});
wedRouter.get('/product/details', (req, res) => {
    res.render('product/shop/detail');
});
exports.default = wedRouter;
//# sourceMappingURL=wed.router.js.map