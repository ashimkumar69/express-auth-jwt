import { HydratedDocument, FilterQuery, UpdateQuery } from "mongoose";
import SessionModel from "../model/session.model";
import { SessionDocument } from "../model/session.model";
import { get } from "lodash";
import config from "config";
import { verifyJwt, signJwt } from "../utils/jwt.utils";
import { findUser } from "./user.service";

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

export async function findSessions(query: FilterQuery<SessionDocument>) {
  return SessionModel.find(query).lean();
}

export async function updateSession(
  query: FilterQuery<SessionDocument>,
  update: UpdateQuery<SessionDocument>
) {
  return SessionModel.updateOne(query, update);
}

export async function reIssueAccessToken(refreshToken: string) {
  const { decoded } = verifyJwt(refreshToken);

  if (!decoded || !get(decoded, "session")) return false;

  const session = await SessionModel.findById(get(decoded, "session"));

  if (!session || !session.valid) return false;

  const user = await findUser({ _id: session.user });

  if (!user) return false;

  const accessToken = signJwt(
    { ...user, session: session._id },
    { expiresIn: config.get("accessTokenTtl") } // 15 minutes
  );

  return accessToken;
}
