"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminController = void 0;
const user_models_1 = __importDefault(require("../models/schemas/user.models"));
class AdminController {
    constructor() {
    }
    async showAdminPage(req, res, next) {
        let data = req.sessionStore;
        console.log(data);
        let user = await user_models_1.default.find();
        res.render('admin/table', { User: user });
    }
    async find(req, res, keyword) {
        let keywords = String(keyword);
        const data = await user_models_1.default.find({ username: { $regex: keywords, $options: "i" } });
        res.status(200).json(data);
    }
    async showFormEditUser(req, res, next) {
        let user = await user_models_1.default.findById({ _id: req.params.id });
        res.render('admin/edit-user', { user: user });
    }
    async updateUser(req, res, next) {
        let data = req.body;
        let role = data.role;
        await user_models_1.default.findOneAndUpdate({ _id: req.params.id }, { role: role });
        res.redirect('/admin/list');
    }
}
exports.AdminController = AdminController;
//# sourceMappingURL=admin.controller.js.map