import mongoose from "mongoose";
import 'mongoose-type-email';
const { Schema } = mongoose;


const staffEarningSchema = mongoose.Schema(
    {
      type: { type: String, required: ["Type of earning is required"] },
      amount: { type: Number, required: ["Earning amount is required"] }
    }
   
  );

const staffDeductionSchema = mongoose.Schema(
{
    type: { type: String, required: ["Type of deduction us required"] },
    amount: { type: Number, required: ["Deduction amount is required"] }
}
   
  );

const payslipSchema = mongoose.Schema(
  {
    period: { type: String }, //required: ["Month and Year is required"] },
    staffId: { type: String }, //required: ["Staff ID field is required"] },
    grossSalary: { type: Number }, //required: ["Amount field is required"] },
    grossReimbursment: { type: Number }, //required: ["Amount field is required"] },
    grossDeductions: { type: Number },// required: ["Amount field is required"] },
    netAmount: { type: Number },// required: ["Amount field is required"] },
    earningsBreakdown: [staffEarningSchema],
    deductionBreakdown: [staffDeductionSchema]
    
  },
  { timestamps: true }
 
);

export default new mongoose.model("Payslip", payslipSchema);