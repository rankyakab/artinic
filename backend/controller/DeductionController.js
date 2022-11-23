import Deduction from "../models/Deduction.js";

export const index = async (req, res) => {
  const deductions =  await Deduction.find({});
  res.json({ deductions });
};

export const create = async (req, res) => {
    const { deductionName,deductionRate,deductionDescription } = req.body;
   if(deductionName === null||deductionRate===null||deductionRate===null){
    const message = `All field in the Deduction Form must to be filled`;
    res.status(204).json({ message });
    return;
   }

  const deductionExists = await Deduction.findOne({ deductionName });
  if (deductionExists) {
    const message = `${deductionName}Allowance already exists`;
    res.status(406).json({ message });
    return;
  }

    const deduction = await new Deduction(req.body);
    await deduction.save();
    res.status(201).json({ message: "Success",deduction  });
  };
export const patch = async (req, res) => {

    const deductionExists = await Deduction.findOne({ _id: req.params.id });
    if (!deductionExists) {
      res.status(404).json({ message: "Deduction do not exists." });
      return;
    }
  
    await Deduction.updateOne({ _id: req.params.id }, {$set: req.body});
    res.json({ message: "success" });
  };
  
  
  export const destroy = async (req, res) => {
    const deductionExists = await Deduction.findOne({ _id: req.params.id});
    //If user is not found
    if (!deductionExists) {
      res.status(406).json({ message: "Deduction already Deleted or Deduction do not exist." });
      return;
    }
   //if user is found
    await Deduction.findOneAndDelete({ _id: req.params.id });
    res.json({ message: "success" });
  };
