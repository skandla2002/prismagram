import passport from "passport";
import JwtStrategy from "passport-jwt";
import { prisma } from "../generated/prisma-client";

const jwtOptions = {
  jwtFromRequest: JwtStrategy.ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET
};
console.log(process.env.JWT_SECRE);

const verifyUser = (payload, done) => {
  try {
      const user = await prisma.user({id: payload.id})
      if(user !== null){
          return done(null, user);
      } else{
          return done(null, false);
      }
  } catch (error){
      return done(error, false)
  }
};

passport.use(new Strategy(jwtOptions, verifyUser));
