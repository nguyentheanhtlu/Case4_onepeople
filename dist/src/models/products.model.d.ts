import mongoose from 'mongoose';
interface IProducts {
    name: string;
    price: number;
    author: string;
    made_in: string;
    description: string;
    category: any;
    image: string;
}
declare const ProductModel: mongoose.Model<IProducts, {}, {}, {}, mongoose.Schema<IProducts, mongoose.Model<IProducts, any, any, any, any>, {}, {}, {}, {}, "type", IProducts>>;
export default ProductModel;
