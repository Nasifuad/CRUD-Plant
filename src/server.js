import { app } from "./app.js";
import connectDB from "./config/database.js";
import { config } from "./config/config.js";
const { PORT } = config;
const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();
