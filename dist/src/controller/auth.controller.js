"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authController = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_models_1 = __importDefault(require("../models/schemas/user.models"));
class authController {
    constructor() {
        this.showFormLogin = (req, res) => {
            res.render('product/login/login');
        };
        this.showFormRegister = (req, res) => {
            res.render('product/login/register');
        };
        this.register = async (req, res) => {
            let user = req.body;
            console.log(user);
            user.password = await bcrypt_1.default.hash(user.password, 10);
            user = await user_models_1.default.create(user);
            return res.status(200).json({ user: user });
        };
        this.login = async (req, res) => {
            let data = req.body;
            let user = await user_models_1.default.findOne({ email: data.email });
            if (!user) {
                console.log("User not found");
                return res.status(200).json({ messages: 'a' });
            }
            else {
                let comparePassword = await bcrypt_1.default.compare(data.password, user.password);
                console.log(comparePassword);
                if (!comparePassword) {
                    console.log("Password mismatch");
                    return res.status(200).json({ messages: 'b' });
                }
                else {
                    let payload = {
                        username: user.username,
                        password: user.password
                    };
                    let secretKey = process.env.SECRET_KEY;
                    let token = await jsonwebtoken_1.default.sign(payload, secretKey, {
                        expiresIn: 36000
                    });
                    const response = {
                        "token": token
                    };
                    console.log(response);
                    return res.status(200).json(response);
                }
            }
        };
    }
}
exports.authController = authController;
//# sourceMappingURL=auth.controller.js.map