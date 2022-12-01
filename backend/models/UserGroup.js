import mongoose from "mongoose";
const { Schema } = mongoose;

const userGroupSchema = new Schema(
  {
    userId: { type: mongoose.Types.ObjectId, required: ["User id is required"] },
    userGroupId:{ type: mongoose.Types.ObjectId, required: ["User id is required"] },
    deletedAt: { type: Date, default:null}
 
    
  },
  { timestamps: true }
);
userGroupSchema.pre('find', function() {
    this.where({ deletedAt: null });
  });
  
  userGroupSchema.pre('findOne', function() {
    this.where({ deletedAt: null});
  });
  


export default new mongoose.model("UserGroup", userGroupSchema);
