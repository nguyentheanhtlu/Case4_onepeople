import express from "express";
import bodyParser from "body-parser";
import { PageController } from "../controller/page.controller";

const wedRouter = express.Router();
const page = new PageController();

wedRouter.get("/", (req, res, next) => {
  page.showHomePage(req, res, next);
});

wedRouter.get("/blog", (req, res, next) => {
  page.showBlog(req, res, next);
});

wedRouter.get("/contact", (req, res, next) => {
  page.showContact(req, res, next);
});

wedRouter.get("/page/shopping-cart", (req, res, next) => {
  page.shoppingCart(req, res, next);
});

wedRouter.get("/page/blog-detail", (req, res, next) => {
  page.showBlogDetail(req, res, next);
});

wedRouter.get("/page/check-out", (req, res, next) => {
  page.checkOut(req, res, next);
});

wedRouter.get("/shop", (req, res, next) => {
  page.showShop(req, res, next).catch((err) => {
    console.log(err.message);
  });
});

wedRouter.get("/shop/men", (req, res, next) => {
  page.showMenShop(req, res, next);
});

wedRouter.get("/shop/women", (req, res, next) => {
  page.showWomenShop(req, res, next);
});

wedRouter.get("/shop/kids", (req, res, next) => {
  page.showKidsShop(req, res, next);
});

wedRouter.get("/product/:id/product-detail", (req, res, next) => {
  page.showProductDetail(req, res, next).catch((err) => {
    console.log(err.message);
  });
});

export default wedRouter;
