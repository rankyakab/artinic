import mongoose from "mongoose";
import 'mongoose-type-email';
const { Schema } = mongoose;

const memoActivitySchema = new Schema(
  {
    memoId: { type: String },
    from: { type: String },
    recipientId: { type: String },
    ccLevel: { type: Number },
    action: { type: String },
    status: { type: String },
    remarks: { type: String }
    
  },
  { timestamps: true }
 
);

export default new mongoose.model("MemoActivity", memoActivitySchema);
