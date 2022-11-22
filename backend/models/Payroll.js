import mongoose from "mongoose";
import'mongoose-type-email';
const { Schema } = mongoose;

const payrollSchema = new Schema(
  {
    paymentType: { type: mongoose.Types.ObjectId, required: ["User Id field is required"] },
    designation: { type: String, required: ["First name field is required"] },
    grossAmount: { type: String, required: ["Home Address field is required"] },
    taxType: { type: String, required: ["Gender number field is required"] },
    netAmount: { type: String, required: ["Phone number field is required"] },

   
    
  },
  { timestamps: true }
 
);

export default new mongoose.model("Payroll", payrollSchema);
