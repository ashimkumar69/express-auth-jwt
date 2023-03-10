import { HydratedDocument } from "mongoose";
import UserModel, { UserInput, UserDocument } from "../model/user.model";

export async function createUser(
  input: UserInput
): Promise<HydratedDocument<UserDocument>> {
  try {
    return await UserModel.create(input);
  } catch (error: any) {
    throw new Error(error);
  }
}
