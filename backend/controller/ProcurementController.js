import { startSession } from "mongoose";
import Procurement from "../models/Procurement.js";


export const create = async (req, res) => {
    const { itemName, itemQuantity ,requestDate,unitPrice,totalPrice,requestedBy,sentTo,attachment,attachmentName,attachmentType} = req.body;
    if(!itemName){
        res.status(400).json({ code: 400, status: "Error", message: "Item  Name is required"});
        return;
      }else if(!itemQuantity){
        res.status(400).json({ code: 400, status: "Error", message: "Item Quantity  is required"});
        return;
      }else if(!requestDate){
        res.status(400).json({ code: 400, status: "Error", message: "Request Date is required"});
        return;
      }else if(!unitPrice){
        res.status(400).json({ code: 400, status: "Error", message: "Unit price is required"});
        return;
      }else if(!totalPrice){
        res.status(400).json({ code: 400, status: "Error", message: "Total Price is required"});
        return;
      }else if(!requestedBy){
        res.status(400).json({ code: 400, status: "Error", message: "Requested by is required"});
        return;
      }else if(!sentTo){
        res.status(400).json({ code: 400, status: "Error", message: "Sent to is required"});
        return;
      }else if(attachment){
         if(!attachmentName){
            res.status(400).json({ code: 400, status: "Error", message: "Attachment name required"});
            return;
         }else if(!attachmentType){
            res.status(400).json({ code: 400, status: "Error", message: "Attachment type  is required"});
            return;
         }
       
      }
      console.log(res.body)

    const procurement = await new Procurement(req.body);
    await procurement.save();
    res.status(201).json({ message: "Success",procurement  });
    return;
  };

export const index = async (req, res) => {
    const procurement =  await Procurement.find({});
   // console.log(req.user._id)
    res.json({ procurement });
  };

  export const totalRequest= async (req, res) => {
  
    const count =  await Procurement.find({}).count();
  
   
    res.json({count});
  };
  export const totalPendingRequest= async (req, res) => {
  
    const procurement =  await Procurement.find({status:"pending"});
  
   
    res.json({procurement});
  };
  export const totalApprovedRequest= async (req, res) => {
  
    const procurement =  await Procurement.find({status:"approved"});
  
   
    res.json({procurement});
  };


export const totalPending = async (req,res)=> {
   const data = await Procurement.aggregate([{$group : {_id : "$status", totalRequest : {$sum : 1}}}]);
   

const total = data.filter(stat=>{
    return stat._id=='pending';
});

   res.json({"total_pending":total[0].totalRequest});

  }


export const totalApproved = async (req,res)=> {
    const data = await Procurement.aggregate([{$group : {_id : "$status", totalRequest : {$sum : 1}}}]);
    
 
 const total = data.filter(stat=>{
     return stat._id=='approved';
 });
 if(total.length >0){
    res.json({"total_approved":total[0].totalRequest});
    return;
 }else{
    res.json({"total_approved":0});
    return;
 }
 
    
 
   }

  export const amount= async (req, res) => {
  
    const procurement =  await Procurement.aggregate([{$group: {_id:null, sum_val:{$sum:"$budgetAmount"}}}]);
  
   
    res.json({"sum": procurement[0].sum_val });
  };
