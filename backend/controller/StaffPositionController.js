import StaffPositionSchema from "../models/StaffPosition.js";

export const index = async (req, res) => {
  const staffPosition =  await StaffPositionSchema.find({});
  res.json({ staffPosition });
};





export const create = async (req, res) => {
    const {staffId,positionId,jobRole,effectiveDate,expiringDate,deletedAt}=req.body;
  
      

  const positionIdentity = await StaffPositionSchema.findOne({ positionId });
  if (positionIdentity) {
    res.status(406).json({ message: "Position already exists." });
    return;
  }

  

  
 const staffPositionId = await StaffPositionSchema ({staffId,positionId,jobRole,effectiveDate,expiringDate,deletedAt});
  await staffPositionId.save();
  res.status(201).json({ message: "Staff Position created successfully",user });

};


export const destroy = async (req, res) => {
  const staffPositionExist = await StaffPositionSchema.findOne({ _id: req.params.id});
  //If user is not found
  if (!staffPositionExist) {
    res.status(406).json({ message: "Position  already Deleted." });
    return;
  }
 //if user is found
  await StaffPositionSchema.findOneAndDelete({ _id: req.params.id });
  res.json({ message: "success" });
};

export const destroyPatch = async(req, res)=>{
    const staffPositionExist = await StaffPositionSchema.findOne({ _id: req.params.id});
    //If user is not found
    if (!staffPositionExist) {
      res.status(406).json({ message: "Position  already Deleted." });
      return;
    }
  await StaffPositionSchema.updateOne({ _id: req.params.id }, {$set:{deletedAt: new Date()}});
  res.json({ message: "success" });
}

export const patch = async (req, res) => {

    const staffPositionExist = await StaffPositionSchema.findOne({ _id: req.params.id});
    //If user is not found
    if (!staffPositionExist) {
      res.status(406).json({ message: "Position  do not exist." });
      return;
    }

  await StaffPositionSchema.updateOne({ _id: req.params.id }, {$set: req.body});
  res.json({ message: "success" });
};
