import passport from "passport";
import { Strategy } from "passport-local";
import user from "../mongoose/schema/user.mjs";
import { comaprePassword } from "../utils/helpers.mjs";

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(async function (id, done) {
  try {
    const findUser = await user.findById(id);
    if (!findUser) throw new Error("User not found!");
    done(null, findUser);
  } catch (error) {
    done(error, null);
  }
});

passport.use(
  new Strategy(async function (username, password, done) {
    try {
      const findUser = await user.findOne({ username });
      if (!findUser) throw new Error("User Not Found!");
      if (
        !(await comaprePassword(password, findUser.password)) &&
        findUser.password !== password
      )
        throw new Error("BAD CREDETIALS!");
      done(null, findUser);
    } catch (error) {
      done(error, null);
    }
  })
);

export default passport;
