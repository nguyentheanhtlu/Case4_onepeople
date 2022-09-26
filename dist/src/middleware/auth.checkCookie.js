"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkLogin = void 0;
function checkLogin(req, res, next) {
    if (req.isAuthenticated()) {
        next();
    }
    else {
        res.redirect('/auth/login');
    }
}
exports.checkLogin = checkLogin;
//# sourceMappingURL=auth.checkCookie.js.map