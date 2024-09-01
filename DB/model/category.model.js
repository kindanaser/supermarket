import { Schema, Types, model } from 'mongoose';

const categorySchema = new Schema({
     name:{
        type:String,
        required:true,
     },
     slug:{
        type:String,
        required:true,
     },
     image:{
        type:Object,
     },
    status:{
        type:String,
        default:'Active',
        enum:['Active','NotActive']
    },
    createdBy:{
        type:Types.ObjectId,
        ref:'User',
    },
    updatedBy:{
        type:Types.ObjectId,
        ref:'User',
    }
},
{timestamps:true ,
    toJSON:{virtuals:true}, 
    toObject:{virtuals:true},
})

categorySchema.virtual("subcategory",{
    localField:'_id',
    foreignField:'categoryId',
    ref:'Subcategory' 
})
const categoryModel = model('Category',categorySchema);
export default categoryModel;