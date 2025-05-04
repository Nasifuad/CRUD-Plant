import { Router } from "express";
import { login, signup, verifyEmail, logout } from "./auth.controller.js";
const router = Router();

router.post("/login", login);
router.post("/signup", signup);
router.post("/verify-email", verifyEmail);
router.post("/logout", logout);

export const authRouter = router;
