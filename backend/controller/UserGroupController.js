import UserGroup from "../models/UserGroup.js";

export const index = async (req, res) => {
  const userGroups =  await UserGroup.find({});
  res.json({ userGroups });
};

export const indexOne = async (req, res) => {
    const userGroup = await UserGroup.findOne({ _id:req.params.id });
    if (!userGroup) {
      const message = ` User Group do not exist`;
      res.status(403).json({ message });
      return;
    }else{
        res.json({ message: "Success", userGroup  });
    }
  };
  

export const create = async (req, res) => {
    const { userId, userGroupId } = req.body;
   if(userId == null||userGroupId==null){
    const message = "All field in the User Group Form needs to be filled";
    res.status(402).json({ message });
    return;
   }

  const groupExists = await UserGroup.findOne({ userGroupId });
  if (groupExists) {
    const message = `${groupName} User Group already exists`;
    res.status(403).json({ message });
    return;
  }

    const userGroup = await new UserGroup(req.body);
    await userGroup.save();
    res.json({ message: "Success",userGroup  });
  };

  
export const patch = async (req, res) => {

    const userGroupExists = await UserGroup.findOne({ _id: req.params.id });
    if (!userGroupExists) {
      res.status(404).json({ message: "User Group do not exists." });
      return;
    }
  
    await UserGroup.updateOne({ _id: req.params.id }, {$set: req.body});
    res.json({ message: "success" });
  };

  export const destroyPatch = async(req, res)=>{
    const userGroupExists = await UserGroup.findOne({ _id: req.params.id });
    if (!userGroupExists) {
      res.status(404).json({ message: "User Group do not exists." });
      return;
    }
  
    await UserGroup.updateOne({ _id: req.params.id }, {$set:{deletedAt: new Date()}});
    res.json({ message: "success" });
  }
  
  
  
  export const destroy = async (req, res) => {
    const userGroupExists = await UserGroup.findOne({ _id: req.params.id});
    //If user is not found
    if (!userGroupExists) {
      res.status(406).json({ message: " Group do not exist." });
      return;
    }
   //if user is found
    await UserGroup.findOneAndDelete({ _id: req.params.id });
    res.json({ message: "success" });
  };
