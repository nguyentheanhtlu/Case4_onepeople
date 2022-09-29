import mongoose from "mongoose";
declare const User: mongoose.Model<{
    username?: string;
    email?: string;
    password?: string;
    facebook_id?: string;
    google_id?: string;
    role?: string;
    email_verify?: string;
    cart_id?: string;
    address?: string;
    phone?: string;
}, {}, {}, {}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    username?: string;
    email?: string;
    password?: string;
    facebook_id?: string;
    google_id?: string;
    role?: string;
    email_verify?: string;
    cart_id?: string;
    address?: string;
    phone?: string;
}>>;
export default User;
