import passport from "passport";
import jwt from "jsonwebtoken";
import * as passportLocal from "passport-local";
const LocalStrategy = passportLocal.Strategy;
import facebookStrategy from "passport-facebook";
const FacebookStrategy = facebookStrategy.Strategy;
import User from "../models/schemas/user.models";
import googleStrategy from "passport-google-oauth20";
const GoogleStrategy = googleStrategy.Strategy;
import crypto from 'crypto';
import * as dotenv from "dotenv";
import Cart from "../models/schemas/cart.models";
import { LocalStorage } from "node-localstorage";
export const localStorage = new LocalStorage("./scratch");
dotenv.config();

const key1 = crypto.randomBytes(32).toString('hex');

passport.use(
    new FacebookStrategy(
      {
        clientID: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
        callbackURL: "http://localhost:3000/auth/facebook/callback",
        profileFields: ["id", "displayName", "photos", "email"],
      },
      function (accessToken, refreshToken, profile, done) {
        process.nextTick(async function () {

          let id_Facebook = profile.id;
          let username = profile._json.name;
          let email = profile._json.email;
          let USER = await User.findOne({ username: username });
          if (USER) {
            let payload = {
              username: username,
              role: 'user',
            };
           
            let secretKey = process.env.SECRET_KEY;
            let token = await jwt.sign(payload, secretKey, {
              expiresIn: 36000,
            });
            const response = {
              token: token,
              role: 'user',
            };
    
            localStorage.setItem("token", JSON.stringify(response));
            return done(null, profile);
          } else {
            let dataCart = {
              emailCart: email,
              totalMoney:'',
              list: [],
              
            };
            await Cart.create(dataCart);
            let cart = await Cart.findOne({ emailCart: email });
            let data = {
              facebook_id: id_Facebook,
              username: username,
              email: email,
              password: '',
              google_id: '',
              role: 'user',
              email_verify: '',
              cart_id: cart._id,
              address: '',
              phone: '',
            }
            let user = await User.create(data);
            let payload = {
              username: username,
              role: 'user',
            };
           
            let secretKey = process.env.SECRET_KEY;
            let token = await jwt.sign(payload, secretKey, {
              expiresIn: 36000,
            });
            const response = {
              token: token,
              role: 'user',
            };
    
            localStorage.setItem("token", JSON.stringify(response));
  
            // console.log({ accessToken });
            // console.log({ profile });
            // console.log(id_Facebook,username,email);
            return done(null, profile);
          }
        });
      }
    )
);
passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:3000/auth/google/callback",
        passReqToCallback: true
      },
      function verify(request, accessToken, refreshToken, profile, done) {
        process.nextTick(async function () {
          let id_Google = profile.id;
          let username = profile._json.name;
          let email = profile._json.email;
          let USER = await User.findOne({ username: username });
          if (USER) {
            let payload = {
              username: username,
              role: 'user',
            };
           
            let secretKey = process.env.SECRET_KEY;
            let token = await jwt.sign(payload, secretKey, {
              expiresIn: 36000,
            });
            const response = {
              token: token,
              role: 'user',
            };
    
            localStorage.setItem("token", JSON.stringify(response));
            return done(null, profile);
          } else {
            let dataCart = {
              emailCart: email,
              totalMoney:'',
              list: [],
              
            };
            await Cart.create(dataCart);
            let cart = await Cart.findOne({ emailCart: email });
            let data = {
              google_id: id_Google,
              username: username,
              email: email,
              password: '',
              facebook_id: '',
              role: 'user',
              email_verify: '',
              cart_id: cart._id,
              address: '',
              phone: '',
            }
            let user = await User.create(data);
            let payload = {
              username: username,
              role: 'user',
            };
           
            let secretKey = process.env.SECRET_KEY;
            let token = await jwt.sign(payload, secretKey, {
              expiresIn: 36000,
            });
            const response = {
              token: token,
              role: 'user',
            };
    
            localStorage.setItem("token", JSON.stringify(response));
  
            // console.log({ accessToken });
            // console.log({ refreshToken });
            // console.log({ profile});
            return done(null, profile);
          }
        });
      }
    )
  );

  passport.serializeUser(function (user, done) {
    done(null, user);
  });
  
  passport.deserializeUser(function (obj, done) {
    done(null, obj);
  });

export default passport;