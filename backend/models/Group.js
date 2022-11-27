import mongoose from "mongoose";
const { Schema } = mongoose;

const groupSchema = new Schema(
  {
    groupName: { type: String, required: ["Email field is required"] },
    groupEmail: { type: String, required: ["Password field is required"] },
 
    
  }
);


export default new mongoose.model("Group", groupSchema);
