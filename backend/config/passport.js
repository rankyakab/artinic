import * as dotenv from "dotenv";
import pkg from "passport-jwt";
import User from "../models/User.js";
const JwtStrategy = pkg.Strategy;
const ExtractJwt = pkg.ExtractJwt;
dotenv.config();
let opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_SECRET;


export default (passport) => {
 
  passport.use(
    new JwtStrategy(opts, function (jwt_payload, done) {
     
      User.findOne({ '_id': jwt_payload._id },'email password' , function (err, user) {
        if (err) {
          return done(err, false);
        }
        if (user) {
        //  console.log(user);
          return done(null, user);
        } else {
          console.log("user was not returned");
          return done(null, false);
        
          // or you could create a new account
        }
      });
    })
  );
};
