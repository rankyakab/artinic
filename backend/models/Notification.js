import mongoose from "mongoose";
const { Schema } = mongoose;

const notificationSchema = new Schema(
  {
    
    userId: { type: mongoose.Types.ObjectId, required: ["user Id field is required"] },
    message: { type: String, required: ["Batch Number field is required"] },
    status: { type: Boolean, default: false },
    
 
 
    
  },
  { timestamps: true }
);


export default new mongoose.model("Notification", notificationSchema);
