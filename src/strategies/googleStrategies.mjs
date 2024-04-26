import passport from "passport";
import { Strategy } from "passport-google-oauth2";
import secrets from "../../googleStrategiesSecrets.mjs";

passport.serializeUser(function (user, done) {
  return done(null, user);
});

passport.deserializeUser(function (user, done) {
  return done(null, user);
});

passport.use(
  new Strategy(
    {
      clientID: secrets.web.client_id,
      clientSecret: secrets.web.client_secret,
      callbackURL: secrets.web.redirect_uris[0],
      passReqToCallback: true,
    },
    function (request, accessToken, refreshToken, profile, done) {
      return done(null, profile);
    }
  )
);

export default passport;
