import mongoose from "mongoose";
const { Schema } = mongoose;

const staffPositionSchema = new Schema(
  {
    staffId: { type: String, required: ["Email field is required"] },
    positionId: { type: String, required: ["Password field is required"] },
    jobRole: { type: String, required: ["Role field is required"] },
    effectiveDate: { type: Date, default: null },
    expiringDate: { type: Date, default: null },
    deletedAt: { type: Date, default: null },
  },
  { timestamps: true }
);
staffPositionSchema.pre('find', function() {
  this.where({ deletedAt: null });
});

staffPositionSchema.pre('findOne', function() {
  this.where({ isDeleted: null });
});

export default new mongoose.model("StaffPositionSchema", staffPositionSchema);
