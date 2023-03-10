import express, { Express } from "express";
import config from "config";
import connectDB from "./utils/connectDB";
import logger from "./utils/logger";
import morgan from "morgan";
import routes from "./routes";

const port = config.get<number>("port");
const host = config.get<number>("host");
const app: Express = express();

app.listen(port, async () => {
  app.use(express.json());
  app.use(morgan("dev"));
  await connectDB();
  logger.info(`App Running On ${host}:${port}`);
  await routes(app);
});
