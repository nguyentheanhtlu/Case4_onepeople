import mongoose from "mongoose";
declare const Cart: mongoose.Model<{
    list: mongoose.Types.DocumentArray<any> | any[];
    emailCart?: string;
    totalMoney?: string;
}, {}, {}, {}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    list: mongoose.Types.DocumentArray<any> | any[];
    emailCart?: string;
    totalMoney?: string;
}>>;
export default Cart;
