import Allowance from "../models/Allowance.js";

export const index = async (req, res) => {
  const allowances =  await Allowance.find({});
  res.json({ allowances });
};

export const create = async (req, res) => {
    const { allowanceName,allowanceAmount,positionTreeId } = req.body;
   if(allowanceName === null||allowanceAmount===null||positionTreeId===null){
    const message = `All field in the Allowance Form needs to be filled`;
    res.status(204).json({ message });
    return;
   }

  const allowanceExists = await Allowance.findOne({ allowanceName });
  if (allowanceExists) {
    const message = `${allowanceName}Allowance already exists`;
    res.status(406).json({ message });
    return;
  }

    const allowance = await new Allowance(req.body);
    await allowance.save();
    res.status(201).json({ message: "Success",allowance  });
  };
export const patch = async (req, res) => {

    const allowanceExists = await Allowance.findOne({ _id: req.params.id });
    if (!allowanceExists) {
      res.status(404).json({ message: "Allowance do not exists." });
      return;
    }
  
    await Allowance.updateOne({ _id: req.params.id }, {$set: req.body});
    res.json({ message: "success" });
  };
  
  
  export const destroy = async (req, res) => {
    const allowanceExists = await Allowance.findOne({ _id: req.params.id});
    //If user is not found
    if (!allowanceExists) {
      res.status(406).json({ message: "Allowance already Deleted or Allowance do not exist." });
      return;
    }
   //if user is found
    await Allowance.findOneAndDelete({ _id: req.params.id });
    res.json({ message: "success" });
  };
