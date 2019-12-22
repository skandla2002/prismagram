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


export const authenticateJwt = (req, res, next) =>  
 // fn(req, res, next) 와 같은 함수임
  passport.authenticate("jwt", {sessions: false}, (error, user) => {
    if(user){
      req.user = user;
    }
    next();
  })(req, res, next);

passport.use(new Strategy(jwtOptions, verifyUser));
