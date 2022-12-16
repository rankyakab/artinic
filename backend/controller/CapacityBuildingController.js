import { startSession } from "mongoose";
import CapacityBuilding from "../models/CapacityBuilding.js";


export const create = async (req, res) => {
 
    const { trainingDescription, startDate ,trainingType,duration,trainingMode,status} = req.body;
    if(!trainingDescription){
        res.status(400).json({ code: 400, status: "Error", message: "Training Description is required"});
        return;
      }else if(!startDate){
        res.status(400).json({ code: 400, status: "Error", message: "Start date is required"});
        return;
      }else if(!trainingType){
        res.status(400).json({ code: 400, status: "Error", message: "Training type is required"});
        return;
      }else if(!duration){
        res.status(400).json({ code: 400, status: "Error", message: "Training duration is required"});
        return;
      }else if(!trainingMode){
        res.status(400).json({ code: 400, status: "Error", message: "Training  mode is required"});
        return;
      }

    const  capacityBuilding = await new CapacityBuilding(req.body);
    await capacityBuilding.save();
    res.status(201).json({ message: "Success",capacityBuilding  });
    return;
  };

export const index = async (req, res) => {
    const capacityBuilding =  await CapacityBuilding.find({});
   // console.log(req.user._id)
    res.json({ capacityBuilding });
  };

  export const totalTrainingRequest= async (req, res) => {
  
    const count =  await capacityBuilding.find({}).count();
  
   
    res.json({count});
  };
  export const totalTrainingDone= async (req, res) => {
  
    const trainingDone =  await CapacityBuilding.find({status:"Completed"});
  
   
    res.json({trainingDone});
  };
  export const totalApprovedRequest= async (req, res) => {
  
    const totalApprovedRequest =  await CapacityBuilding.find({status:"approved"});
  
   
    res.json({totalApprovedRequest});
  };


