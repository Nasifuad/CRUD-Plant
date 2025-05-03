import helmet from "helmet";
import cors from "cors";
import router from "./routes/router.js";
import express from "express";

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Mount router
app.use("/api/v1", router);

// Basic route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

export { app };
