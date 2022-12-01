import * as argon2 from "argon2";
import User from "../models/User.js";

export const index = async (req, res) => {
  const users =  await User.find({});
  res.json({ users });
};



export const create = async (req, res) => {
    
  let hashedPassword=""
    const { email, password, role } = req.body;
   try {
    hashedPassword = await argon2.hash(password);
   } catch (error) {
    
   }
     
      

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(406).json({ message: "User already exists." });
    return;
  }

  
 //const salt = await bcrypt.genSaltSync(10); 
// const hashedPassword = await bcrypt.hashSync(password, salt);


  
 const user = await new User({
  
  email,
  password:hashedPassword,
  role
 });
  await user.save();
  //res.status(201).json({ message: "user is created",user });
  console.log(req.body)
  res.status(201).json({ message: "user is created",user });

};


export const destroy = async (req, res) => {
  const userExists = await User.findOne({ _id: req.params.id});
  //If user is not found
  if (!userExists) {
    res.status(406).json({ message: "User already Deleted." });
    return;
  }
 //if user is found
  await User.findOneAndDelete({ _id: req.params.id });
  res.json({ message: "success" });
};
export const destroyPatch = async(req, res)=>{
  const userExists = await User.findOne({ _id: req.params.id });
  if (!userExists) {
    res.status(404).json({ message: "User do not exists." });
    return;
  }

  await User.updateOne({ _id: req.params.id }, {$set:{deletedAt: new Date()}});
  res.json({ message: "success" });
}

export const patch = async (req, res) => {

  const userExists = await User.findOne({ _id: req.params.id });
  if (!userExists) {
    res.status(404).json({ message: "User do not exists." });
    return;
  }

  await User.updateOne({ _id: req.params.id }, {$set: req.body});
  res.json({ message: "success" });
};
