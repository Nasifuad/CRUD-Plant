import helmet from "helmet";
import cors from "cors";
import express from "express";
const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Basic error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, error: "Internal Server Error" });
});

export { app };
