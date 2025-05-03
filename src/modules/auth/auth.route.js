import { Router } from "express";

const router = Router();

router.get("/test", (req, res) => {
  res.send("Hello World!");
});

export const authRouter = router;
