import mongoose from "mongoose";
import'mongoose-type-email';
const { Schema } = mongoose;

const tokenSchema = new Schema(
  {
    staffId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Staff",
      },
      token: {
        type: String,
        required: true,
      },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 3600,// this is the expiry time
      },
    
  }
 
 
);

  
export default new mongoose.model("Token", tokenSchema);