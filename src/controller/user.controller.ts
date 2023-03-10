import { Request, Response } from "express";
import logger from "../utils/logger";
import { createUser } from "../service/user.service";
import { omit } from "lodash";
import { CreateUserInput } from "../schema/user.schema";

export async function createUserControllerHandler(
  req: Request<{}, {}, CreateUserInput["body"]>,
  res: Response
) {
  try {
    const user = await createUser(omit(req.body, "passwordConfirmation"));
    return res.status(201).send(omit(user.toJSON(), "password"));
  } catch (error: any) {
    logger.error(error);
    return res.status(409).send(error.message);
  }
}
