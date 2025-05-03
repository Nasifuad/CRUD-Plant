import { Router } from "express";
import { authRouter } from "../modules/auth/auth.route.js";

const router = Router();

const routesModule = [
  {
    path: "/auth",
    router: authRouter,
  },
];

routesModule.forEach((route) => {
  router.use(route.path, route.router);
});

export default router;
