import mongoose from "mongoose";
declare const User: mongoose.Model<{
    list: any[];
}, {}, {}, {}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    list: any[];
}>>;
export default User;
