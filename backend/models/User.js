import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    email: { type: String, required: ["Email field is required"] },
    password: { type: String, required: ["Password field is required"] },
    role: { type: String, required: ["Role field is required"] },
    deletedAt: { type: Date, default: null }
    
  },
  { timestamps: true }
);
userSchema.pre('find', function() {
  this.where({ deletedAt: null });
});




userSchema.pre('findOne', function() {
 this.where({ isDeleted: null });
});

export default new mongoose.model("User", userSchema);
