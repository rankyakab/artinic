import mongoose from "mongoose";
import 'mongoose-type-email';
//import PaymentVoucherSheet from "./PaymentVoucherSheet.js";

const { Schema } = mongoose;

const VoucherSheetSchema = new Schema(
    {
      class: { type: String, required: ["Payment class is compulsory"] },
      description: { type: String, required: ["Description field is compulsory"] },
      qty: { type: Number, required: ["Quantity field is compulsory"] },
      unitPrice: { type: Number, required: ["Unit price is compulsory"] },
      amount: { type: Number },
      vat: { type: Number },
      vatAmount: { type: Number },
      grossAmount: { type: Number },
      whtRate: { type: Number },
      whtAmount: { type: Number },
      netAmount: { type: Number },
  
    },
  
    { timestamps: true }
   
  );

const VoucherSchema = mongoose.Schema(
  {
    preparedBy: { type: String, required: ["Initiator field is compulsory"] },
    subject: { type: String, required: ["Subject field is compulsory"] },
    beneficiaryAccountNumber: { type: String, required: ["Memo title field is required"] },
    beneficiaryAccountName: { type: String, required: ["Memo title field is required"] },
    beneficiaryBank: { type: String, required: ["First name field is required"] },
    voucherSheet: [VoucherSheetSchema]
    
  },
  { timestamps: true }
 
);

export default new mongoose.model("Voucher", VoucherSchema);