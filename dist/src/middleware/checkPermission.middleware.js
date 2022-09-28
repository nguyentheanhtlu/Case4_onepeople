"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authLoginUser = exports.localStorage = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const node_localstorage_1 = require("node-localstorage");
exports.localStorage = new node_localstorage_1.LocalStorage('./scratch');
const authLoginUser = (req, res, next) => {
    let authorization = exports.localStorage.getItem('token');
    if (authorization) {
        let accessToken = authorization;
        if (!accessToken) {
            res.status(200).json({ message: "Access token is required3." });
        }
        else {
            let newdata = JSON.parse(accessToken);
            jsonwebtoken_1.default.verify(newdata.token, process.env.SECRET_KEY, (err, data) => {
                if (err) {
                    res.status(200).json({ message: "Access token is required3." });
                }
                else {
                    next();
                }
            });
        }
    }
    else {
        res.status(200).json({ message: "Access token is required3." });
    }
};
exports.authLoginUser = authLoginUser;
//# sourceMappingURL=checkPermission.middleware.js.map