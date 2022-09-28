import mongoose from "mongoose";
declare const Cart: mongoose.Model<{
    list: mongoose.Types.DocumentArray<any> | any[];
    emailCart?: string;
}, {}, {}, {}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    list: mongoose.Types.DocumentArray<any> | any[];
    emailCart?: string;
}>>;
export default Cart;
