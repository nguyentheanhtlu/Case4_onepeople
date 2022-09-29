import nodemailer from "nodemailer";
import * as dotenv from "dotenv";
dotenv.config();

export const senMail = (to, subject, htmlContent) => {
  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
    },
  });
  const options = {
    from: process.env.MAIL_FROM_ADDRESS,
    to: to,
    subject: subject,
    html: htmlContent,
  };
  return transporter.sendMail(options);
};
