import mongoose from "mongoose";
const { Schema } = mongoose;

const budgetSchema = new Schema(
  {
    budgetNumber: { type: String, required: ["Budget Number is required"] },
    budgetDescription: { type: String, required: ["Budget Discription field is required"] },
    budgetAmount: {type: Number, default:0},
    budgetDate: { type: Date, default:null},
    budgetPrice: { type: Number, default:1},
    budgetReceivingOffice: {type:String}

 
    
  },
  { timestamps: true }
);


export default new mongoose.model("Budget", budgetSchema);
