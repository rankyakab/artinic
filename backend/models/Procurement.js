import mongoose from "mongoose";
const { Schema } = mongoose;

const procurementSchema = new Schema(
  {
    itemName: { type: String, required: ["Item name is required"] },
    itemQuantity: { type: Number, required: ["Item quantity is required"] },
    requestDate: { type: Date,  required: ["Request date is required"] },
    status: { type: String,  default:"pending"},
    unitPrice: {type: Number,  required: ["Unit Price is required"] },
    totalPrice: {type: Number,  required: ["Total Price is required"] },
    requestedBy: { type: String, required: ["Requested by is required"] },
    sentTo: { type: String, required: ["Sent to is required"] },
    attachmentName: { type: String, required: ["Name of Attachment is required"] },
    attachmentType: { type: String, required: ["Attachment type is required"] },
    
  },
  { timestamps: true }
);


export default new mongoose.model("procurementSchema", procurementSchema);
