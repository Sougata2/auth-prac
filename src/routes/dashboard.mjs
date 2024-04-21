import { Router } from "express";
import isLogedIn from "../utils/middleware.mjs";

const dashboardRoute = Router();

dashboardRoute.get("/api/dashboard", isLogedIn, function (request, response) {
  const {
    user: { username },
  } = request.session;

  return response
    .status(200)
    .send(`Hello ${username}, welcome to the dashboard.`);
});

export default dashboardRoute;
