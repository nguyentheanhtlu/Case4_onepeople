"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authController = exports.localStorage = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_models_1 = __importDefault(require("../models/schemas/user.models"));
const cart_models_1 = __importDefault(require("../models/schemas/cart.models"));
const express_session_1 = __importDefault(require("express-session"));
const mailer_1 = require("../utils/mailer");
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const node_localstorage_1 = require("node-localstorage");
exports.localStorage = new node_localstorage_1.LocalStorage("./scratch");
class authController {
    constructor() {
        this.showFormLogin = (req, res) => {
            exports.localStorage.removeItem("token");
            res.render("product/login/login");
        };
        this.showFormRegister = (req, res) => {
            res.render("product/login/register");
        };
        this.register = async (req, res) => {
            let user = req.body;
            let Email = user.email;
            console.log(Email);
            let userByEmail = await user_models_1.default.findOne({ email: Email });
            let userByUsername = await user_models_1.default.findOne({ username: user.username });
            if (userByUsername) {
                return res.json({ usernamemessages: "Username đã tồn tại !" });
            }
            else if (userByEmail) {
                return res.json({ emailmessages: "Email đã tồn tại !" });
            }
            else {
                user.password = await bcrypt_1.default.hash(user.password, parseInt(process.env.BCRYPT_SALT_ROUND));
                let dataCart = {
                    emailCart: user.email,
                    list: [],
                };
                await cart_models_1.default.create(dataCart);
                let cart = await cart_models_1.default.findOne({ emailCart: user.email });
                let data = {
                    username: user.username,
                    email: user.email,
                    password: user.password,
                    facebook_id: "",
                    google_id: "",
                    role: "user",
                    email_verify: '',
                    cart_id: cart._id,
                    address: '',
                    phone: '',
                };
                let newUser = await user_models_1.default.create(data, (err, user) => {
                    console.log(user);
                    if (err) {
                        console.log(err);
                    }
                    else {
                        console.log(Email);
                        bcrypt_1.default
                            .hash(user.email, parseInt(process.env.BCRYPT_SALT_ROUND))
                            .then((hashedEmail) => {
                            console.log(`${process.env.APP_URL}/verify?email=${user.email}&token=${hashedEmail}`);
                            (0, mailer_1.senMail)(user.email, "Verify Email", `<a href="${process.env.APP_URL}/auth/verify?email=${user.email}&token=${hashedEmail}"> Verify </a>`);
                        });
                        return res.status(200).json({ user: newUser });
                    }
                });
            }
        };
        this.login = async (req, res) => {
            let data = req.body;
            let user = await user_models_1.default.findOne({ email: data.email });
            if (!user) {
                return res.status(200).json({ messages: "notfound" });
            }
            else if (!user.email_verify) {
                return res.status(200).json({ messages: "unconfirmed" });
            }
            else {
                let comparePassword = await bcrypt_1.default.compare(data.password, user.password);
                if (!comparePassword) {
                    return res.status(200).json({ messages: "wrongpassword" });
                }
                else {
                    let payload = {
                        username: user.username,
                        password: user.password,
                        role: user.role,
                    };
                    (0, express_session_1.default)({
                        secret: "SECRET",
                        resave: false,
                        saveUninitialized: true,
                        cookie: { maxAge: 60 * 60 * 1000 },
                    });
                    let secretKey = process.env.SECRET_KEY;
                    let token = await jsonwebtoken_1.default.sign(payload, secretKey, {
                        expiresIn: 36000,
                    });
                    const response = {
                        token: token,
                        role: user.role,
                    };
                    exports.localStorage.setItem("token", JSON.stringify(response));
                    return res.status(200).json(response);
                }
            }
        };
        this.verify = (req, res) => {
            bcrypt_1.default.compare(req.query.email, req.query.token, (err, result) => {
                if (result === true) {
                    user_models_1.default.findOneAndUpdate({ email: `${req.query.email}` }, { email_verify: Date.now() }, function (err, docs) {
                        if (err) {
                            console.log(err);
                        }
                        else {
                            res.redirect("/auth/login");
                        }
                    });
                }
                else {
                    res.redirect("/404");
                }
            });
        };
        this.checkLogin = (req, res) => {
            res.render("product/login/checkLogin");
        };
    }
}
exports.authController = authController;
//# sourceMappingURL=auth.controller.js.map