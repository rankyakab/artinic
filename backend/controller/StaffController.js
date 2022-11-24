import Staff from "../models/Staff.js";

export const index = async (req, res) => {
  const staffs =  await Staff.find({});
  res.json({ staffs });
};
export const first = async (req, res) => {
  const staffs =  await Staff.find({_id:req.params.id});
  res.json({ staffs });
};
//this returns staff deduction by Id
export const deduction = async (req, res) => {
  const staffExists = await Staff.findOne({ _id: req.params.id });
  if (!staffExists) {
    res.status(404).json({ message: "Staff do not exists." });
    return;
  }
 const {staffDeduction}=staffExists;
  res.json( {staffDeduction });
};

//this returns staff deduction by Id
export const earning = async (req, res) => {
  const staffExists = await Staff.findOne({ _id: req.params.id });
  if (!staffExists) {
    res.status(404).json({ message: "Staff do not exists." });
    return;
  }
 const {staffEarning}=staffExists;
  res.json( {staffEarning });
};
/*
export const create = async (req, res) => {
    const { personalEmail } = req.body;
    

  const staffExists = await Staff.findOne({ personalEmail });
  if (staffExists) {
    res.status(406).json({ message: "Staff already exists." });
    return;
  }
    const staff = await new Staff(req.body);
    await staff.save();
    res.status(201).json({ message: "Success",staff  });
  };

  */
export const patch = async (req, res) => {

    const staffExists = await Staff.findOne({ _id: req.params.id });
    if (!staffExists) {
      res.status(404).json({ message: "Staff do not exists." });
      return;
    }
  
    await Staff.updateOne({ _id: req.params.id }, {$set: req.body});
    res.json({ message: "success" });
  };
  
  
export const destroy = async (req, res) => {
  
  const staffExists = await Staff.findOne({ _id: req.params.id});
  //If user is not found
  if (!staffExists) {
    res.status(406).json({ message: "Staff do not exist." });
    return;
  }
 //if user is found
 staffExists.isDeleted=true;
 staffExists.deletedT=new Date() ;
  await  Staff.updateOne({ _id: req.params.id }, {$set: staffExists});
  res.json({ message: "success" , staff: staffExists });
};
