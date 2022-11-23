import EmployeeEarning from "../models/EmployeeEarning.js";

export const index = async (req, res) => {
  const employeeEarning =  await EmployeeEarning.find({});
  res.json({ employeeEarning });
};

export const create = async (req, res) => {
    const {earningName} = req.body;
  

  const earningExists = await EmployeeEarning.findOne({ earningName });
  if (earningExists) {
    const message = `${earningName} Earning already exists`;
    res.status(406).json({ message });
    return;
  }

    const earning = await new EmployeeEarning(req.body);
    await earning.save();
    res.status(201).json({ message: "Success",earning  });
  };
export const patch = async (req, res) => {

    const earningExists = await EmployeeEarning.findOne({ _id: req.params.id });
    if (!earningExists) {
      res.status(404).json({ message: "Earning do not exists." });
      return;
    }
  
    await EmployeeEarning.updateOne({ _id: req.params.id }, {$set: req.body});
    res.json({ message: "success" });
  };
  
  
  export const destroy = async (req, res) => {
    const earningExists = await EmployeeEarning.findOne({ _id: req.params.id});
    //If user is not found
    if (!earningExists) {
      res.status(406).json({ message: "Earning already Deleted or Allowance do not exist." });
      return;
    }
   //if user is found
    await EmployeeEarning.findOneAndDelete({ _id: req.params.id });
    res.json({ message: "success" });
  };
