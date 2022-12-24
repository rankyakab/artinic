import mongoose from "mongoose";
import'mongoose-type-email';
const { Schema } = mongoose;

const systemLogSchema = new Schema(
  {
    logName: { type:  String },
    logEvent: { type:  String },
    logActivity: { type: String },
    logUserId: { type: String }
   
  },
  { timestamps: true }
 
);


export default new mongoose.model("SystemLogs", systemLogSchema);
