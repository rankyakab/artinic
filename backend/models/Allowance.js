import mongoose from "mongoose";
import'mongoose-type-email';
const { Schema } = mongoose;

const allowanceSchema = new Schema(
  {
    allowanceName: { type:  String, required: ["Allowance name field is required"] },
    allowanceAmount: { type: String, required: ["First name field is required"] },
    positionTreeId: { type: mongoose.Types.ObjectId, required: ["Position tree id field is required"] },
    
    
  },
  { timestamps: true }
 
);

  
export default new mongoose.model("Allowance", allowanceSchema);
