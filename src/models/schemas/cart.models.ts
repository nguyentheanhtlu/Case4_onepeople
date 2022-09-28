import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    emailCart:String,
    list:[]
});

const Cart = mongoose.model("Carts", userSchema);

export default Cart;