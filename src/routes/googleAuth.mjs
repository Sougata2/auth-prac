import { Router } from "express";
import passport from "passport";

const googleRoutes = Router();

googleRoutes.get(
  "/api/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

googleRoutes.get(
  "/auth/callback",
  passport.authenticate("google"),
  function (request, response) {
    const {
      user: { name },
    } = request;
    return response.status(200).send(`Hi ${name.givenName} ${name.familyName}`);
  }
);

export default googleRoutes;
