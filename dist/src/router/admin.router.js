"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const adminRouter = express_1.default.Router();
const multer_1 = __importDefault(require("multer"));
const upload = (0, multer_1.default)();
adminRouter.get('/admin/list', (req, res) => {
    res.render('admin/table');
});
adminRouter.get('/admin/create/product', (req, res) => {
    res.render('admin/form');
});
exports.default = adminRouter;
//# sourceMappingURL=admin.router.js.map