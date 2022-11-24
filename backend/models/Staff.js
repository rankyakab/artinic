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
    gender: { type: String, required: ["Gender is required"] },
    personalEmail: {type: mongoose.SchemaTypes.Email, required: true},
    ipPhone: { type: String, default:"" },
    employmentType: { type: Date, default: new Date() },
    employmentDate: { type: Date, default: new Date() },
    terminationType: { type: Date, default: new Date() },
    terminationDate: { type: Date, default: new Date() },
    staffPositionId: { type: mongoose.Types.ObjectId, required: ["Staff Position is required"] },
    staffImage: { type: String, default:""},
    isDeleted:{type:Boolean, default:false},
    staffDeduction : [{
              deductionPeriod: { type: Date, default: new Date() },
              deductionName: { type: String, required: ["Middle name field is required"] },
              deductionAmount: { type: String, required: ["Home Address field is required"] },
       }],
       staffEarning : [{
        earningPeriod: { type: Date, default: new Date() },
    earningType: { type: String, required: ["Deduction field is required"] },
    earningName: { type: String, required: ["Middle name field is required"] },
    earningAmount: { type: String, required: ["Home Address field is required"] },
 }],
 isAuthenticated:{type:Boolean, default:false},
 password: { type: String, default:"password" },
    deletedT: { type: Date,}
  },
  { timestamps: true }
 
);
staffSchema.pre('find', function() {
  this.where({ isDeleted: false });
});

staffSchema.pre('findOne', function() {
  this.where({ isDeleted: false });
});


export default new mongoose.model("Staff", staffSchema);
