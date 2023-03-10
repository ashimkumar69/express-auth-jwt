import { HydratedDocument } from "mongoose";
import SessionModel from "../model/session.model";
import { SessionDocument } from "../model/session.model";

export async function createSession(
  userId: string,
  userAgent: string
): Promise<HydratedDocument<SessionDocument>> {
  try {
    return await SessionModel.create({
      user: userId,
      userAgent,
    });
  } catch (error: any) {
    throw new Error(error);
  }
}
