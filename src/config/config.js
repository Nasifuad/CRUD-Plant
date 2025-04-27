import dotenv from "dotenv";

dotenv.config({
  path: "./.env",
});

export const config = {
  PORT: process.env.PORT || 3000,
  MONGO_URI: process.env.MONGO_URI,
  NODE_ENV: process.env.NODE_ENV || "development",
};

console.log(process.env.NODE_ENV);
