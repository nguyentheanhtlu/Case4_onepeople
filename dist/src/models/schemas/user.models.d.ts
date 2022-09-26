import mongoose from "mongoose";
declare const User: mongoose.Model<{
    username?: string;
    email?: string;
    password?: string;
    facebook_id?: string;
    google_id?: string;
    role?: string;
    email_verify?: string;
}, {}, {}, {}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    username?: string;
    email?: string;
    password?: string;
    facebook_id?: string;
    google_id?: string;
    role?: string;
    email_verify?: string;
}>>;
export default User;
