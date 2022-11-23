import EmployeeDeduction from "../models/EmployeeDeduction.js";

export const index = async (req, res) => {
  const employeeDeduction =  await EmployeeDeduction.find({});
  res.json({ employeeDeduction });
};

export const create = async (req, res) => {
    const {deductionName} = req.body;
  

  const deductionExists = await EmployeeDeduction.findOne({ deductionName });
  if (deductionExists) {
    const message = `${deductionName} Deduction already exists`;
    res.status(406).json({ message });
    return;
  }

    const deduction = await new EmployeeDeduction(req.body);
    await deduction.save();
    res.status(201).json({ message: "Success",deduction  });
  };
export const patch = async (req, res) => {

    const deductionExists = await EmployeeDeduction.findOne({ _id: req.params.id });
    if (!deductionExists) {
      res.status(404).json({ message: "Earning do not exists." });
      return;
    }
  
    await EmployeeDeduction.updateOne({ _id: req.params.id }, {$set: req.body});
    res.json({ message: "success" });
  };
  
  
  export const destroy = async (req, res) => {
    const deductionExists = await EmployeeDeduction.findOne({ _id: req.params.id});
    //If user is not found
    if (!deductionExists) {
      res.status(406).json({ message: "Earning already Deleted or Allowance do not exist." });
      return;
    }
   //if user is found
    await EmployeeDeduction.findOneAndDelete({ _id: req.params.id });
    res.json({ message: "success" });
  };
