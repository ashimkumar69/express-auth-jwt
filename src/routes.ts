import { Express, Request, Response } from "express";
import { createUserControllerHandler } from "./controller/user.controller";
import validateResource from "./middleware/validateResource";
import { createUserSchema } from "./schema/user.schema";
import { createSessionSchema } from "./schema/session.schema";
import { createUserSessionControllerHandler } from "./controller/session.controller";

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
}
