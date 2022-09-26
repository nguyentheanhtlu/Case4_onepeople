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
const express_1 = __importDefault(require("express"));
const auth_controller_1 = require("../controller/auth.controller");
const auth_middleware_1 = __importDefault(require("../middleware/auth.middleware"));
const authRouter = express_1.default.Router();
const AuthController = new auth_controller_1.authController();
const dotenv = __importStar(require("dotenv"));
const crypto_1 = __importDefault(require("crypto"));
dotenv.config();
const key1 = crypto_1.default.randomBytes(32).toString('hex');
const multer_1 = __importDefault(require("multer"));
const validation_1 = require("../middleware/validation");
const upload = (0, multer_1.default)();
authRouter.get("/register", AuthController.showFormRegister);
authRouter.post("/register", upload.none(), validation_1.validateUserSignUp, validation_1.userValidation, AuthController.register);
authRouter.get("/login", AuthController.showFormLogin);
authRouter.post("/login", upload.none(), AuthController.login);
authRouter.get("/facebook", auth_middleware_1.default.authenticate("facebook", { scope: "email" }));
authRouter.get("/facebook/callback", auth_middleware_1.default.authenticate("facebook", {
    successRedirect: "/",
    failureRedirect: "/auth/login",
}), (req, res) => {
    res.redirect("/");
});
authRouter.get("/google", auth_middleware_1.default.authenticate("google", { scope: ["profile", "email"] }));
authRouter.get("/google/callback", auth_middleware_1.default.authenticate("google", {
    successRedirect: "/",
    failureRedirect: "/auth/login",
}), (req, res) => {
    res.redirect("/");
});
exports.default = authRouter;
//# sourceMappingURL=auth.router.js.map