import { Router } from "express";

const homeRoute = Router();

homeRoute.get("/", function (request, response) {
  return response.status(200).send("HOME PAGE");
});

export default homeRoute;
