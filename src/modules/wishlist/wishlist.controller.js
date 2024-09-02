import wishlistModel from '../../../DB/model/wishlist.model.js'

export const getAll = async (req,res)=>{
    const wishlist = await wishlistModel.findOne({userId:req.user._id});
    return res.status(201).json({message:"success", wishlist})
 }

export const create = async (req,res)=>{
    const {productId} = req.body;
    const list = await wishlistModel.findOne({userId:req.user._id});
    if(!list){
        const newList = await wishlistModel.create({
            userId:req.user._id,
            products:{productId}   });
            return res.status(201).json({message:"success", list:newList})
    }
   for(let i = 0 ;i<list.products.length;i++){
     if(list.products[i].productId == productId){
        return res.status(404).json({message:"product already exists!!"})
     }  
   }
   list.products.push({productId})
   await list.save();
   return res.status(201).json({message:"success",list})
 }

export const remove = async (req,res)=>{
   const {productId} = req.params;
   const list = await wishlistModel.findOneAndUpdate({userId:req.user._id},{
    $pull:{
     products:{
        productId:productId,
     }
    }} , {new:true}
   )
   return res.status(201).json({message:"success",list})
 }
 
export const clear = async (req,res)=>{
    const list = await wishlistModel.findOneAndUpdate({userId:req.user._id},{
     products:[]
    } , {new:true}
    )
    return res.status(201).json({message:"success",list})
 }