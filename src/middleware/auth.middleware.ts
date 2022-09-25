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
    new LocalStrategy(async (username, password, done) => {
        console.log(key1);
        console.log(username, password);
        const user = await User.findOne({ username: username });
        console.log(user);
      if (!user) {
        return done(null, false, { message: "Incorrect username and password" });
      }
  
      if (user.password !== password) {
        return done(null, false, { message: "Incorrect username and password" });
      }
  
      return done(null, user);
    })
);

passport.use(
    new FacebookStrategy(
      {
        clientID: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
        callbackURL: "http://localhost:3000/auth/facebook/callback",
        profileFields: ["id", "displayName", "photos", "email"],
      },
      function (accessToken, refreshToken, profile, done) {
        process.nextTick(function () {
          console.log({ accessToken });
          console.log({ refreshToken });
          console.log({ profile });
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
        process.nextTick(function () {
          console.log({ accessToken });
          console.log({ refreshToken });
          console.log({ profile});
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