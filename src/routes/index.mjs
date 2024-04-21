import { Router } from "express";
import homeRoute from "./home.mjs";
import authRoute from "./auth.mjs";
import dashboardRoute from "./dashboard.mjs";

const routes = Router();

routes.use(homeRoute);
routes.use(authRoute);
routes.use(dashboardRoute);

export default routes;
