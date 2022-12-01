import mongoose from "mongoose";
import'mongoose-type-email';
const { Schema } = mongoose;

const staffSchema = new Schema(
  {
    userId: { type: mongoose.Types.ObjectId, required: ["User Id field is required"] },
    staffNo: { type: String, default: "EFG45T" },
    firstName: { type: String, required: ["First name field is required"] },
    lastName: { type: String, required: ["Last name field is required"] },
    middleName: { type: String, required: ["Middle name field is required"] },
    homeAddress: { type: String, required: ["Home Address field is required"] },
    phoneNumber: { type: String, required: ["Phone number field is required"] },
    personalEmail: {type: mongoose.SchemaTypes.Email, required:  ["Personal Email is required"]},
    gender: { type: String, required: ["Gender is required"] },
    ipPhone: { type: String, default:"" },
    employmentType: {  type: String, required: ["Employent type is required"]},
    employmentDate: { type: Date, default: new Date() },
    terminationType: {  type: String, default:"" },
    terminationDate: { type: Date, default: "" },
    staffPositionId: { type: mongoose.Types.ObjectId, required: ["Staff Position is required"] },
    deletedAt: { type: Date, default:null}
  },
  { timestamps: true }
 
);
staffSchema.pre('find', function() {
  this.where({ deletedAt: null ,terminationDate:""});
});

staffSchema.pre('findOne', function() {
  this.where({ deletedAt: null, terminationDate:"" });
});


export default new mongoose.model("Staff", staffSchema);
