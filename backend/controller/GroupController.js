import Group from "../models/Group.js";

export const index = async (req, res) => {
  const groups =  await Group.find({});
  res.json({ groups });
};
export const indexOne = async (req, res) => {
    const group = await Group.findOne({ _id:req.params.id });
    if (!group) {
      const message = ` Group do not exist`;
      res.status(403).json({ message });
      return;
    }else{
        res.json({ message: "Success", group  });
    }
  };
  

export const create = async (req, res) => {
    const { groupName, groupEmail } = req.body;
   if(groupName == null||groupEmail==null){
    const message = "All field in the Group Form needs to be filled";
    res.status(402).json({ message });
    return;
   }

  const groupExists = await Group.findOne({ groupName });
  if (groupExists) {
    const message = `${groupName} Group already exists`;
    res.status(403).json({ message });
    return;
  }

    const group = await new Group(req.body);
    await group.save();
    res.json({ message: "Success",group  });
  };

  
export const patch = async (req, res) => {

    const groupExists = await Group.findOne({ _id: req.params.id });
    if (!groupExists) {
      res.status(404).json({ message: "Group do not exists." });
      return;
    }
  
    await Group.updateOne({ _id: req.params.id }, {$set: req.body});
    res.json({ message: "success" });
  };
  
  
  export const destroy = async (req, res) => {
    const groupExists = await Group.findOne({ _id: req.params.id});
    //If user is not found
    if (!groupExists) {
      res.status(406).json({ message: " Group do not exist." });
      return;
    }
   //if user is found
    await Group.findOneAndDelete({ _id: req.params.id });
    res.json({ message: "success" });
  };
