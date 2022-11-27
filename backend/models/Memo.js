import mongoose from "mongoose";
import 'mongoose-type-email';
const { Schema } = mongoose;

const activitySchema = mongoose.Schema(
{
  recipientId: { type: String },
  ccLevel: { type: Number },
  action: { type: String, default: "None" },
  status: { type: Boolean, default: true },
  remarks: { type: String, default: "" }
},
{ timestamps: true }
);

const memoSchema = mongoose.Schema(
  {
    memoDate: { type: Date, required: ["Memo Date field is required"] },
    refId: { type: String, required: ["Memo Date field is required"] },
    memoTitle: { type: String, required: ["Memo title field is required"] },
    memoBody: { type: String, required: ["Memo title field is required"] },
    ownerId: { type: String, required: ["First name field is required"] },
    attachment: { type: String },
    attachemntType: { type: String },
    memoType: { type: String, required: ["Memo Type field is required"] },
    completion: { type: Boolean, default: true },
    activities: [activitySchema]
    
  },
  { timestamps: true }
 
);

export default new mongoose.model("Memo", memoSchema);