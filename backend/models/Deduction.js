import mongoose from "mongoose";
import'mongoose-type-email';
const { Schema } = mongoose;

const DeductionSchema = new Schema(
  {
    deductionName: { type:  String, required: ["Deduction name field is required"] },
    deductionRate: { type: String, required: ["First name field is required"] },
    deductionDescription: { type: String , required: ["Position tree id field is required"] },
    
    
  },
  { timestamps: true }
 
);

  
export default new mongoose.model("Deduction", DeductionSchema);
