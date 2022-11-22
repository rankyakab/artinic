import mongoose from "mongoose";
import'mongoose-type-email';
const { Schema } = mongoose;

const memoSchema = new Schema(
  {
    memoTitle: { type: String, required: ["Memo title field is required"] },
    sentFromId: { type: String, required: ["First name field is required"] },
    sentToId: { type: String, required: ["Last name field is required"] },
    attachment: { type: String, required: ["Home Address field is required"] },
    attachemntType: { type: String, required: ["Gender number field is required"] },
    memoType: { type: String, required: ["Phone number field is required"] },

    correspondents: [{ label: String, icon: String }],
    
  },
  { timestamps: true }
 
);

export default new mongoose.model("Memo", memoSchema);
