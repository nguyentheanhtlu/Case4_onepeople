import express from "express";
import * as dotenv from "dotenv";
import bodyParser from "body-parser";
import session from "express-session";
import passport from "passport";
import mongoose from "mongoose";
import { ConnectDB } from "./src/models/ConnectDB";
import authRouter from "./src/router/auth.router";
import wedRouter from "./src/router/wed.router";
import adminRouter from "./src/router/admin.router";

dotenv.config();
const app = express();
const { PORT, KEY_SESSION } = process.env;

const db = new ConnectDB();
db.connect()
  .then(() => {
    console.log("DB Connected!");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.set("views", "./src/views");
app.use(express.static("src/public"));


app.use(
  session({
    secret: "SECRET",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60 * 60 * 1000 },
  })
);
app.use(passport.initialize());
app.use(passport.authenticate('session'));

app.use("", wedRouter);
app.use("", adminRouter);
app.use("/auth", authRouter);

app.listen(PORT, () => {
  console.log("http://localhost:3000");
});
