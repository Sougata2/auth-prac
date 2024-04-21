import { Router } from "express";
import isLogedIn from "../utils/middleware.mjs";
import express from "express";

const authRoute = Router();

authRoute.post("/api/auth", function (request, response) {
  const { body } = request;
  const { username, password } = body;
  if (username == "sougata" && password == "sougata123") {
    request.session.user = { username, password };
    return response.status(200).send("Authenticated!");
  }
  return response.status(401).send("Not Authorized!");
});

authRoute.get("/api/auth/status", function (request, response) {
  return response.status(200).send(request.session.user);
});

authRoute.post("/api/auth/logout", isLogedIn, function (request, response) {
  const {
    user: { username },
  } = request.session;
  request.session.destroy((err) => {
    if (err) return response.status(200);
    return response.status(200).send(`User ${username}, logged out!`);
  });
});

export default authRoute;
