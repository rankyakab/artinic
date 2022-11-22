import Payroll from "../models/Payroll.js";

export const index = async (req, res) => {
  const payrolls =  await Payroll.find({});
  res.json({ payrolls });
};

export const create = async (req, res) => {
   // const { personalEmail } = req.body;

 // const staffExists = await Staff.findOne({ personalEmail });
 // if (staffExists) {
  //  res.status(406).json({ message: "Staff already exists." });
   // return;
  //}
    const payroll = await Payroll(res.body);
    await payroll.save();
    res.status(201).json({ message: "Success",payroll  });
  };
  
  