import mongoose from "mongoose";
import'mongoose-type-email';
const { Schema } = mongoose;

const employeeDeductionSchema = new Schema(
  {
    staffId: { type: mongoose.Types.ObjectId, required: ["Staff Id field is required"] },
    deductionPeriod: { type: Date, default: new Date() },
    deductionName: { type: String, required: ["Middle name field is required"] },
    deductionAmount: { type: String, required: ["Home Address field is required"] },
    
  },
  { timestamps: true }
 
);



export default new mongoose.model("EmployeeDeduction", employeeDeductionSchema);
