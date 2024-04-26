import { Router } from "express";
import homeRoute from "./home.mjs";
import authRoute from "./auth.mjs";
import dashboardRoute from "./dashboard.mjs";
import googleRoutes from "./googleAuth.mjs";

const routes = Router();

routes.use(homeRoute);
routes.use(authRoute);
routes.use(googleRoutes);
routes.use(dashboardRoute);

export default routes;
