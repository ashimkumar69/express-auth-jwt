import mongoose from "mongoose";
import config from "config";
import logger from "./logger";

export default async function connectDB() {
  const urlDB = config.get<string>("urlDB");

  try {
    await mongoose.connect(urlDB);
    logger.info("db connected");
  } catch (error) {
    logger.error("db connection error");
    process.exit(1);
  }
}
