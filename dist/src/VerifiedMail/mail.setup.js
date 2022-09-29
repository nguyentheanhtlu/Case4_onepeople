"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(require("nodemailer"));
let VerifiedEmail = (req, res, otp) => {
    let transporter = nodemailer_1.default.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: "tktclothershopc0522i1@gmail.com",
            pass: "kmyumpncamivculs",
        },
        tls: {
            rejectUnauthorized: false,
        }
    });
    let content = '';
    content += `
        <div style="padding: 10px; background-color: #003375">
        <div style="padding: 10px; background-color: white;">
            <h4 style="color: #ee1414; width: 100%; text-align: center; font-size: 20px;">Mã xác thực của bạn</h4>
            <div style="color: black; font-size: 35px; width: 100%; text-align: center; height: 50px;">${otp}</div>
        </div>
        </div> 
    `;
    let mainOptions = {
        from: 'TKT Group',
        to: `${req.body.emailRegister}`,
        subject: 'Xác thực Tài khoản',
        text: '',
        html: content
    };
    transporter.sendMail(mainOptions, (err, info) => {
        if (err) {
            console.log(err);
            req.flash('message', 'Send Error: ' + err);
            res.redirect('/login');
        }
        else {
            req.flash('message', 'Một email đã được gửi đến tài khoản của bạn!');
            res.redirect('/login');
        }
    });
};
exports.default = VerifiedEmail;
//# sourceMappingURL=mail.setup.js.map