import mongoose from "mongoose";
import'mongoose-type-email';
const { Schema } = mongoose;

const systemLogSchema = new Schema(
  {
    logName: { type: String, required: ["First name field is required"] },
    logEvent: { type: String, required: ["Last name field is required"] },
    logActivity: { type: String, required: ["Middle name field is required"] },
    logUserId: { type: mongoose.Types.ObjectId, required: ["Staff Position is required"] },
   
  },
  { timestamps: true }
 
);


export default new mongoose.model("System", systemLogSchema);
