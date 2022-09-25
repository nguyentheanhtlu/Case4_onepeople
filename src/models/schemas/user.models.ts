import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  facebook_id: String,
  google_id: String,
  role: String,
});

const User = mongoose.model("Users", userSchema);

export default User;
