import mongoose from "mongoose";

const { Schema } = mongoose;

const circularSchema = new Schema(
  {
    circularTitle: { type: mongoose.Types.ObjectId, required: ["User Id field is required"] }, 
    sentFromId: { type: mongoose.Types.ObjectId, required: ["Sent From field is required"] },
    sentFromId: { type: mongoose.Types.ObjectId, required: ["Sent To field is required"] },
    circularType: { type: String, required: ["Circular Type field is required"] },
    circularMessage: { type: String, required: ["Circular Message field is required"] },

    
  },
  { timestamps: true }
 
);

export default new mongoose.model("Circular", circularSchema);
