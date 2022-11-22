import mongoose from "mongoose";
import'mongoose-type-email';
const { Schema } = mongoose;

const staffSchema = new Schema(
  {
    userId: { type: mongoose.Types.ObjectId, required: ["User Id field is required"] },
    firstName: { type: String, required: ["First name field is required"] },
    lastName: { type: String, required: ["Last name field is required"] },
    middleName: { type: String, required: ["Middle name field is required"] },
    homeAddress: { type: String, required: ["Home Address field is required"] },
    phoneNumber: { type: String, required: ["Phone number field is required"] },
    personalEmail: {type: mongoose.SchemaTypes.Email, required: true},
    ipPhone: { type: String, required: ["Last name field is required"] },
    employmentType: { type: Date, default: new Date() },
    employmentDate: { type: Date, default: new Date() },
    terminationType: { type: Date, default: new Date() },
    terminationDate: { type: Date, default: new Date() },
    staffPositionId: { type: mongoose.Types.ObjectId, required: ["Staff Position is required"] },
    deletedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
 
);

export default new mongoose.model("Staff", staffSchema);
