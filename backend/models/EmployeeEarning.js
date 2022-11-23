import mongoose from "mongoose";
import'mongoose-type-email';
const { Schema } = mongoose;

const employeeEarningSchema = new Schema(
  {
    staffId: { type: mongoose.Types.ObjectId, required: ["Staff Id field is required"] },
    earningPeriod: { type: Date, default: new Date() },
    earningType: { type: String, required: ["Deduction field is required"] },
    earningName: { type: String, required: ["Middle name field is required"] },
    earningAmount: { type: String, required: ["Home Address field is required"] },
    
  },
  { timestamps: true }
 
);



export default new mongoose.model("EmployeeEarning", employeeEarningSchema);
