"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authLogin = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authLogin = (req, res, next) => {
    let authorization = req.headers['authorization'];
    console.log(authorization);
    if (authorization) {
        let accessToken = authorization.split('')[1];
        if (!accessToken) {
            res.status(401).json({ message: "Access token is required1." });
        }
        else {
            jsonwebtoken_1.default.verify(accessToken, process.env.SECRET_KEY, (err, data) => {
                if (err) {
                    res.status(401).json({ message: "Access token is required2." });
                }
                else {
                    next();
                }
            });
        }
    }
    else {
        res.status(401).json({ message: "Access token is required3." });
    }
};
exports.authLogin = authLogin;
//# sourceMappingURL=auth.js.map