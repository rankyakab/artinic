import mongoose from "mongoose";
const { Schema } = mongoose;

const stockSchema = new Schema(
  {
    
    productId: { type: String, required: ["Product Id field is required"] },
    batchNo: { type: String, required: ["Batch Number field is required"] },
    quantity: {type: Number,  required: ["Quantity  field is required"]},
    price: {type: Number, default:0},
 
 
    
  },
  { timestamps: true }
);


export default new mongoose.model("Stock", stockSchema);
