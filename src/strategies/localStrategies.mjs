import passport from "passport";
import { Strategy } from "passport-local";

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  try {
    if (id != 1) throw new Error("Incorrect Id");
    done(null, { id, username: "sougata", password: "sougata123" });
  } catch (error) {
    done(error, null);
  }
});

passport.use(
  new Strategy(function (username, password, done) {
    try {
      if (username != "sougata" || password != "sougata123")
        throw new Error("BAD CREDETIALS!");
      done(null, { id: 1, username, password });
    } catch (error) {
      done(error, null);
    }
  })
);

export default passport;
