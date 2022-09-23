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
const dotenv = __importStar(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const auth_router_1 = __importDefault(require("./src/router/auth.router"));
const wed_router_1 = __importDefault(require("./src/router/wed.router"));
const admin_router_1 = __importDefault(require("./src/router/admin.router"));
dotenv.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(body_parser_1.default.json());
app.set("view engine", "ejs");
app.set("views", "./src/views");
app.use(express_1.default.static('public'));
const DB_URL = process.env.MONGODB_URL;
mongoose_1.default
    .connect(DB_URL)
    .then(() => console.log("DB Connected!"))
    .catch((error) => console.log("DB connection error:", error.message));
app.use('', wed_router_1.default);
app.use('', admin_router_1.default);
app.use('/auth', auth_router_1.default);
app.listen(PORT, () => {
    console.log('http://localhost:3000');
});
//# sourceMappingURL=index.js.map