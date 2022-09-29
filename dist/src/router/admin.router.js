"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const adminRouter = express_1.default.Router();
const admin_controller_1 = require("../controller/admin.controller");
const product_controller_1 = require("../controller/product.controller");
const auth_1 = require("../middleware/auth");
const admin = new admin_controller_1.AdminController();
const product = new product_controller_1.ProductController();
adminRouter.get('/admin/list', auth_1.authLogin, (req, res, next) => {
    admin.showAdminPage(req, res, next);
});
adminRouter.post('/admin/list', auth_1.authLogin, (req, res, next) => {
    let keyword = req.body.keywords;
    admin.find(req, res, keyword).catch(err => {
        console.log(err.message);
    });
});
adminRouter.get('/admin/user/update/:id', (req, res, next) => {
    admin.showFormEditUser(req, res, next);
});
adminRouter.post('/admin/user/update/:id', (req, res, next) => {
    admin.updateUser(req, res, next);
});
adminRouter.get('/admin/create/product', auth_1.authLogin, (req, res, next) => {
    product.formCreateProduct(req, res, next).catch(err => {
        console.log(err.message);
    });
});
adminRouter.post('/admin/create/product', auth_1.authLogin, (req, res, next) => {
    product.store(req, res, next).catch(err => {
        console.log(err.message);
    });
});
adminRouter.get('/admin/list/product', auth_1.authLogin, (req, res, next) => {
    product.productList(req, res, next).catch(err => {
        console.log(err.message);
    });
});
adminRouter.get('/admin/product/:id/delete', auth_1.authLogin, (req, res, next) => {
    product.deleteProduct(req, res, next).catch(err => {
        console.log(err.message);
    });
});
adminRouter.get('/admin/product/:id/update', auth_1.authLogin, (req, res, next) => {
    product.editProduct(req, res, next).catch(err => {
        console.log(err.message);
    });
});
adminRouter.post('/admin/product/:id/update', auth_1.authLogin, (req, res, next) => {
    product.edit(req, res, next).catch(err => {
        console.log(err.message);
    });
});
exports.default = adminRouter;
//# sourceMappingURL=admin.router.js.map