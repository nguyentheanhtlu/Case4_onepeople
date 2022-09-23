import express from "express";
import * as dotenv from "dotenv";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import authRouter from "./src/router/auth.router";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.set("view engine", "ejs");
app.set("views", "./src/views");
app.use(express.static('public'));

app.use('/auth',authRouter)

app.listen(PORT,()=>{
    console.log('http://localhost:3000');
})