import mongoose, {Schema, model} from 'mongoose';

interface IProducts{
    name : string,
    price : number,
    author : string,
    made_in : string,
    description : string,
    category : any,
    image : string
}


const productSchema = new mongoose.Schema<IProducts>({
    name : {
        type : String,
        require : true
    },
    price : {
        type : Number,
        require : true
    },
    author : {
        type : String,
    },
    made_in : {
        type : String,
    },
    description : {
        type : String,
    },
    category : {
        type : Schema.Types.ObjectId,
        ref : 'Category',
    },
    image: String
});

const ProductModel = mongoose.model('product', productSchema);

export default ProductModel;