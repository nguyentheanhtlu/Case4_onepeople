"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminController = void 0;
class AdminController {
    constructor() {
    }
    showAdminPage(req, res, next) {
        res.render('admin/table');
    }
}
exports.AdminController = AdminController;
//# sourceMappingURL=admin.controller.js.map