import mongoose from "mongoose";
import'mongoose-type-email';
const { Schema } = mongoose;

const memoSchema = new Schema(
  {
    memoDate: { type: Date, default: new Date() },
    refId: { type: String, required: ["First name field is required"] },
    memoTitle: { type: String, required: ["Memo title field is required"] },
    memoBody: { type: String, required: ["Last name field is required"] },
    isMemoAttachment: { type: Boolean,default:false },
    memoAttachemntType: { type: String, default:"" },
    memoAttachment: { type: String,default:"" },
    memoCompletion: { type: String,default:"" },
    memoOwnerId: { type: mongoose.Types.ObjectId, required: ["Owner Id field is required"] },
    memoType: { type: String, required: ["Phone number field is required"] },
    isDeleted:{type:Boolean, default:false},
    deletedT: { type: Date,}
    
  },
  { timestamps: true }
 
);
memoSchema.pre('find', function() {
    this.where({ isDeleted: false });
  });
  
  memoSchema.pre('findOne', function() {
    this.where({ isDeleted: false });
  });
  
export default new mongoose.model("Memo", memoSchema);
