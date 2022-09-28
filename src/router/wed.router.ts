import  jwt  from 'jsonwebtoken';
import express from "express";
import bodyParser from "body-parser";
import { PageController } from "../controller/page.controller";
import { authLoginUser } from "../middleware/checkPermission.middleware";
import { LocalStorage } from 'node-localstorage';
export const localStorage = new LocalStorage('./scratch');
import multer from "multer";
import User from '../models/schemas/user.models';
import Cart from '../models/schemas/cart.models';

const upload = multer();
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

wedRouter.post("/get-cart-items", (req, res, next) => {
  let user = localStorage.getItem('token')
  console.log(user);
  let newdata = JSON.parse(user);
  // console.log(newdata);
  jwt.verify(newdata.token, process.env.SECRET_KEY, async (err, data) => {
    // console.log(data);
    let user = await User.findOne({ username: data.username })
    console.log(user.cart_id);
    let cartuser = await Cart.findById({ _id: user.cart_id });
    let listCart  = cartuser.list
    res.status(200).json(listCart.length);
  })
 
});

wedRouter.post("/product/cart", authLoginUser, (req, res, next) => {
  let idPr = req.body.idProduct;
  let user = localStorage.getItem('token')
  console.log(user);
  let newdata = JSON.parse(user);
  // console.log(newdata);
  jwt.verify(newdata.token, process.env.SECRET_KEY, async (err, data) => {
    // console.log(data);
    let user = await User.findOne({ username: data.username })
    console.log(user.cart_id);
    let cartuser = await Cart.findById({ _id: user.cart_id });
    let listCart  = cartuser.list
  
    if(cartuser.list.indexOf(idPr) === -1) {
      cartuser.list.push(idPr)
      await Cart.findByIdAndUpdate(user.cart_id, {list: listCart})

    }
    res.status(200).json({ datass: cartuser.list.length });
  })
});

wedRouter.get("/product/cart/payment", (req, res, next) => {
  let user = localStorage.getItem('token')
  // console.log(user);
  let newdata = JSON.parse(user);
  // console.log(newdata);
  jwt.verify(newdata.token, process.env.SECRET_KEY, async (err, data) => {
    // console.log(data);
    let user = await User.findOne({ username: data.username });
    console.log(user.address);
    let cartuser = await Cart.findById({ _id: user.cart_id });
    let listCart = cartuser.list
    if (!user.address || !user.phone) {
      res.render('product/dat-hang')
    
    }
  })

});
export default wedRouter;
