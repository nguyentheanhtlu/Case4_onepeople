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
const passport_1 = __importDefault(require("passport"));
const passportLocal = __importStar(require("passport-local"));
const LocalStrategy = passportLocal.Strategy;
const passport_facebook_1 = __importDefault(require("passport-facebook"));
const FacebookStrategy = passport_facebook_1.default.Strategy;
const user_models_1 = __importDefault(require("../models/schemas/user.models"));
const passport_google_oauth20_1 = __importDefault(require("passport-google-oauth20"));
const GoogleStrategy = passport_google_oauth20_1.default.Strategy;
const crypto_1 = __importDefault(require("crypto"));
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const key1 = crypto_1.default.randomBytes(32).toString('hex');
passport_1.default.use(new LocalStrategy(async (username, password, done) => {
    console.log(key1);
    console.log(username, password);
    const user = await user_models_1.default.findOne({ username: username });
    console.log(user);
    if (!user) {
        return done(null, false, { message: "Incorrect username and password" });
    }
    if (user.password !== password) {
        return done(null, false, { message: "Incorrect username and password" });
    }
    return done(null, user);
}));
passport_1.default.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/facebook/callback",
    profileFields: ["id", "displayName", "photos", "email"],
}, function (accessToken, refreshToken, profile, done) {
    process.nextTick(function () {
        console.log({ accessToken });
        console.log({ refreshToken });
        console.log({ profile });
        return done(null, profile);
    });
}));
passport_1.default.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/callback",
    passReqToCallback: true
}, function verify(request, accessToken, refreshToken, profile, done) {
    process.nextTick(function () {
        console.log({ accessToken });
        console.log({ refreshToken });
        console.log({ profile });
        return done(null, profile);
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