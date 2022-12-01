import mongoose from "mongoose";
const { Schema } = mongoose;

const roleSchema = new Schema(
  {
    role: { type: String, required: ["Role Field is required"] },
    permission: { type: String, required: ["permission field is required"] },
   
  },
  { timestamps: true }
);


export default new mongoose.model("Role", roleSchema);
