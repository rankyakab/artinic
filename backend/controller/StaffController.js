import Staff from "../models/Staff.js";

export const index = async (req, res) => {
  const staffs =  await Staff.find({});
  res.json({ staffs });
};

export const create = async (req, res) => {
    const { personalEmail } = req.body;

  const staffExists = await Staff.findOne({ personalEmail });
  if (staffExists) {
    res.status(406).json({ message: "Staff already exists." });
    return;
  }
    const staff = await Staff(res.body);
    await staff.save();
    res.status(201).json({ message: "Success",staff  });
  };
  
  