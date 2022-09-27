import passport from "passport";
import * as passportLocal from "passport-local";
const LocalStrategy = passportLocal.Strategy;
import facebookStrategy from "passport-facebook";
const FacebookStrategy = facebookStrategy.Strategy;
import User from "../models/schemas/user.models";
import googleStrategy from "passport-google-oauth20";
const GoogleStrategy = googleStrategy.Strategy;
import crypto from 'crypto';
import * as dotenv from "dotenv";
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
          let data = {
            facebook_id: id_Facebook,
            username: username,
            email: email,
            password: '',
            google_id: '',
            role: 'user',
            email_verify:''
          }
          let user = await User.create(data)

          // console.log({ accessToken });
          // console.log({ profile });
          // console.log(id_Facebook,username,email);
          return done(null, profile);
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
          let data = {
            google_id: id_Google,
            username: username,
            email: email,
            password: '',
            facebook_id: '',
            role: 'user',
            email_verify:''
          }
          let user = await User.create(data)
          // console.log({ accessToken });
          // console.log({ refreshToken });
          // console.log({ profile});
          return done(null, profile);
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