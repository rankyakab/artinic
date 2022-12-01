import Role from "../models/Role.js";

export const index = async (req, res) => {
  const roles =  await Role.find({});
  res.json({ roles });
};
export const first = async (req, res) => {
  const roles =  await Role.find({_id:req.params.id});
  res.json({ roles });
};


export const create = async (req, res) => {
    const { role, permission } = req.body;
    

  const roleExists = await Role.findOne({
    role
});
  if (roleExists) {
    res.status(406).json({ message: "Role already exists." });

    return;
  }
    const newRole = await new Role(req.body);
    await newRole.save();
    res.json({ message: "Success",newRole  });
  };

  
export const patch = async (req, res) => {

    const roleExists = await Role.findOne({ _id: req.params.id });
    if (!roleExists) {
      res.status(404).json({ message: "Role do not exists." });
      return;
    }
  
    await Role.updateOne({ _id: req.params.id }, {$set: req.body});
    res.json({ message: "success" });
  };
  
  
export const destroy = async (req, res) => {
  
  const roleExists = await Role.findOne({ _id: req.params.id});
  //If user is not found
  if (!roleExists) {
    res.status(406).json({ message: "Role already deleted." });
    return;
  }
 //if user is found
 await Role.findOneAndDelete({ _id: req.params.id });
 res.json({ message: "success" });
};
