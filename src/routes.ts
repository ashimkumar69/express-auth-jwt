import { Express, Request, Response } from "express";
import { createUserControllerHandler } from "./controller/user.controller";
import validateResource from "./middleware/validateResource";
import { createUserSchema } from "./schema/user.schema";
import { createSessionSchema } from "./schema/session.schema";
import {
  createUserSessionControllerHandler,
  getUserSessionsHandler,
  deleteSessionHandler,
} from "./controller/session.controller";
import requireUser from "./middleware/requireUser";

export default async function routes(app: Express) {
  app.get("/health-check", (req: Request, res: Response) => {
    res.sendStatus(200);
  });

  app.post(
    "/api/sessions",
    validateResource(createSessionSchema),
    createUserSessionControllerHandler
  );

  app.post(
    "/api/users",
    validateResource(createUserSchema),
    createUserControllerHandler
  );

  app.get("/api/sessions", requireUser, getUserSessionsHandler);

  app.delete("/api/sessions", requireUser, deleteSessionHandler);
}
