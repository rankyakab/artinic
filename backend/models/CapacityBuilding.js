import mongoose from "mongoose";
const { Schema } = mongoose;

const capacityBuildingSchema = new Schema(
  {
    trainingDescription: { type: String, required: ["Item name is required"] },
    startDate: { type: Date,  required: ["Start Date  is required"] },
    trainingType: { type: String,  required: ["Training type is required"] },
    duration: { type: Number,  required: ["Training duration is required"] },
    trainingMode: {type: String,  required: ["Training mode is required"] },
    status: {type: String,  default:"To-do" },
    
  },
  { timestamps: true }
);


export default new mongoose.model("CapacityBuilding", capacityBuildingSchema);
