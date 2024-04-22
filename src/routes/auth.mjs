import { Router } from "express";
import isLogedIn from "../utils/middleware.mjs";
import passport from "passport";

const authRoute = Router();

authRoute.post(
  "/api/auth",
  passport.authenticate("local"),
  function (request, response) {
    return response.status(200).send("Authenticated!");
  }
);

authRoute.get("/api/auth/status", function (request, response) {
  console.log(request.session.passport);
  console.log(request.user);
  return response.status(200).send(request.user);
});

authRoute.post("/api/auth/logout", isLogedIn, function (request, response) {
  const { username } = request.user;
  if (!request.user) return response.status(401).send("Unauthenticated!");
  request.logOut(function (err) {
    if (err) return response.status(400).send(err);
    return response.status(200).send(`User ${username}, Logged Out!`);
  });
});

export default authRoute;
