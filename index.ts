import express from "express";
import * as dotenv from "dotenv";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import authRouter from "./src/router/auth.router";
import wedRouter from "./src/router/wed.router";
import adminRouter from "./src/router/admin.router";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.set("view engine", "ejs");
app.set("views", "./src/views");
app.use(express.static('public'));
const DB_URL = process.env.MONGODB_URL;
mongoose
  .connect(DB_URL)

  .then(() => console.log("DB Connected!"))

  .catch((error) => console.log("DB connection error:", error.message));


app.use('', wedRouter);
app.use('',adminRouter)
app.use('/auth', authRouter);

app.listen(PORT,()=>{
    console.log('http://localhost:3000');
})




