"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema = new mongoose_1.default.Schema({
    username: String,
    email: String,
    password: String,
    facebook_id: String,
    google_id: String,
    role: String,
    email_verify: String,
});
const User = mongoose_1.default.model("Users", userSchema);
exports.default = User;
//# sourceMappingURL=user.models.js.map