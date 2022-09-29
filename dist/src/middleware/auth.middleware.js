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
exports.localStorage = void 0;
const passport_1 = __importDefault(require("passport"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const passportLocal = __importStar(require("passport-local"));
const LocalStrategy = passportLocal.Strategy;
const passport_facebook_1 = __importDefault(require("passport-facebook"));
const FacebookStrategy = passport_facebook_1.default.Strategy;
const user_models_1 = __importDefault(require("../models/schemas/user.models"));
const passport_google_oauth20_1 = __importDefault(require("passport-google-oauth20"));
const GoogleStrategy = passport_google_oauth20_1.default.Strategy;
const crypto_1 = __importDefault(require("crypto"));
const dotenv = __importStar(require("dotenv"));
const cart_models_1 = __importDefault(require("../models/schemas/cart.models"));
const node_localstorage_1 = require("node-localstorage");
exports.localStorage = new node_localstorage_1.LocalStorage("./scratch");
dotenv.config();
const key1 = crypto_1.default.randomBytes(32).toString('hex');
passport_1.default.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/facebook/callback",
    profileFields: ["id", "displayName", "photos", "email"],
}, function (accessToken, refreshToken, profile, done) {
    process.nextTick(async function () {
        let id_Facebook = profile.id;
        let username = profile._json.name;
        let email = profile._json.email;
        let USER = await user_models_1.default.findOne({ username: username });
        if (USER) {
            let payload = {
                username: username,
                role: 'user',
            };
            let secretKey = process.env.SECRET_KEY;
            let token = await jsonwebtoken_1.default.sign(payload, secretKey, {
                expiresIn: 36000,
            });
            const response = {
                token: token,
                role: 'user',
            };
            exports.localStorage.setItem("token", JSON.stringify(response));
            return done(null, profile);
        }
        else {
            let dataCart = {
                emailCart: email,
                totalMoney: '',
                list: [],
            };
            await cart_models_1.default.create(dataCart);
            let cart = await cart_models_1.default.findOne({ emailCart: email });
            let data = {
                facebook_id: id_Facebook,
                username: username,
                email: email,
                password: '',
                google_id: '',
                role: 'user',
                email_verify: '',
                cart_id: cart._id,
                address: '',
                phone: '',
            };
            let user = await user_models_1.default.create(data);
            let payload = {
                username: username,
                role: 'user',
            };
            let secretKey = process.env.SECRET_KEY;
            let token = await jsonwebtoken_1.default.sign(payload, secretKey, {
                expiresIn: 36000,
            });
            const response = {
                token: token,
                role: 'user',
            };
            exports.localStorage.setItem("token", JSON.stringify(response));
            return done(null, profile);
        }
    });
}));
passport_1.default.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/callback",
    passReqToCallback: true
}, function verify(request, accessToken, refreshToken, profile, done) {
    process.nextTick(async function () {
        let id_Google = profile.id;
        let username = profile._json.name;
        let email = profile._json.email;
        let USER = await user_models_1.default.findOne({ username: username });
        if (USER) {
            let payload = {
                username: username,
                role: 'user',
            };
            let secretKey = process.env.SECRET_KEY;
            let token = await jsonwebtoken_1.default.sign(payload, secretKey, {
                expiresIn: 36000,
            });
            const response = {
                token: token,
                role: 'user',
            };
            exports.localStorage.setItem("token", JSON.stringify(response));
            return done(null, profile);
        }
        else {
            let dataCart = {
                emailCart: email,
                totalMoney: '',
                list: [],
            };
            await cart_models_1.default.create(dataCart);
            let cart = await cart_models_1.default.findOne({ emailCart: email });
            let data = {
                google_id: id_Google,
                username: username,
                email: email,
                password: '',
                facebook_id: '',
                role: 'user',
                email_verify: '',
                cart_id: cart._id,
                address: '',
                phone: '',
            };
            let user = await user_models_1.default.create(data);
            let payload = {
                username: username,
                role: 'user',
            };
            let secretKey = process.env.SECRET_KEY;
            let token = await jsonwebtoken_1.default.sign(payload, secretKey, {
                expiresIn: 36000,
            });
            const response = {
                token: token,
                role: 'user',
            };
            exports.localStorage.setItem("token", JSON.stringify(response));
            return done(null, profile);
        }
    });
}));
passport_1.default.serializeUser(function (user, done) {
    done(null, user);
});
passport_1.default.deserializeUser(function (obj, done) {
    done(null, obj);
});
exports.default = passport_1.default;
//# sourceMappingURL=auth.middleware.js.map