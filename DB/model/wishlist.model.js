import { Schema, Types, model } from 'mongoose';
const wishlistSchema = new Schema({
     userId:{
        type:Types.ObjectId,
        ref:'User',
        required:true,
        unique:true,
     },
     products:[{
        productId:{type:Types.ObjectId,ref:'Product',required:true},
     }]
},
{timestamps:true,})

const wishlistModel = model('Wishlist',wishlistSchema);
export default wishlistModel;