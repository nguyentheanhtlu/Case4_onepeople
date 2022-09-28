"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkLogin = void 0;
const checkLogin = (req, res, next) => {
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()) {
        next();
    }
    else {
        return res.status(200).json({ messages: "chualogin" });
    }
};
exports.checkLogin = checkLogin;
//# sourceMappingURL=auth.checkCookie.js.map