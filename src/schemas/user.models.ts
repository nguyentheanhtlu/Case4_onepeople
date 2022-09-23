import { Schema, model } from "mongoose";

interface IUser {
  username: string;
  email: string;
  password: string;
  facebook_id: string;
  google_id: string;
  role: string;
}

const userSchema = new Schema<IUser>({
    username: String,
    email: String,
    password: String,
    facebook_id: String,
    google_id: String,
    role: String,
});

const UserModel = model<IUser>("User", userSchema);
export { UserModel };
