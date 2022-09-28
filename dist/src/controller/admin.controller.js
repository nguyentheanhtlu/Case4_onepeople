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
        console.log(keyword);
        let keywords = String(keyword);
        const data = await user_models_1.default.find({ username: { $regex: keywords, $options: "i" } });
        res.status(200).json(data);
    }
}
exports.AdminController = AdminController;
//# sourceMappingURL=admin.controller.js.map