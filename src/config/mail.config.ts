import * as dotenv from "dotenv";
import { model } from "mongoose";
dotenv.config()

module.exports = {
    MAILER: process.env.MAILER,
    HOST: process.env.HOST,
    PORT: process.env.PORT,
    USERNAME: process.env.USERNAME,
    PASSWORD: process.env.PASSWORD,
    ENCRUPTION: process.env.ENCRUPTION,
    FORM_ADDRESS: process.env.FORM_ADDRESS,
    FROM_NAME: process.env.FROM_NAME,

}