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
const express_session_1 = __importDefault(require("express-session"));
const passport_1 = __importDefault(require("passport"));
const ConnectDB_1 = require("./src/models/ConnectDB");
const auth_router_1 = __importDefault(require("./src/router/auth.router"));
const wed_router_1 = __importDefault(require("./src/router/wed.router"));
const admin_router_1 = __importDefault(require("./src/router/admin.router"));
const express_fileupload_1 = __importDefault(require("express-fileupload"));
dotenv.config();
const app = (0, express_1.default)();
const { PORT, KEY_SESSION } = process.env;
const db = new ConnectDB_1.ConnectDB();
db.connect()
    .then(() => {
    console.log("DB Connected!");
})
    .catch((err) => {
    console.log(err.message);
});
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.set("views", "./src/views");
app.use(express_1.default.static("src/public"));
app.use((0, express_fileupload_1.default)({
    createParentPath: true
}));
app.use((0, express_session_1.default)({
    secret: "SECRET",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60 * 60 * 1000 },
}));
app.use(passport_1.default.initialize());
app.use(passport_1.default.authenticate('session'));
app.use("/", wed_router_1.default);
app.use("/", admin_router_1.default);
app.use("/auth", auth_router_1.default);
app.listen(PORT, () => {
    console.log("http://localhost:3000");
});
//# sourceMappingURL=index.js.map