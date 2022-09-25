"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authLogin = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authLogin = (req, res, next) => {
    let authorization = req.headers.authorization;
    if (authorization) {
        let accessToken = req.headers.authorization.split('')[1];
        if (!accessToken) {
            res.redirect('/auth/login');
        }
        else {
            jsonwebtoken_1.default.verify(accessToken, process.env.SECRET_KEY, (err, data) => {
                if (err) {
                    res.redirect('/auth/login');
                }
                else {
                    req.decoded = data;
                    next();
                }
            });
        }
    }
    else {
        res.redirect('/auth/login');
    }
};
exports.authLogin = authLogin;
//# sourceMappingURL=auth.js.map