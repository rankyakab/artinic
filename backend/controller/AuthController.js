import * as argon2 from "argon2";
import  crypto from "crypto";

import jwt from "jsonwebtoken";
import User from "../models/User.js";
import Token from "../models/Token.js";
import sendEmail from "../utils/emails/sendEmail.js";



/*

export const register = async (req, res) => {
  const { email, password, firstName, lastName } = req.body;

  const userExists = await Staff.findOne({ email });
  if (userExists) {
    res.status(406).json({ message: "User already exists." });
    return;
  }
  let hashedPassword="";
  hashedPassword = await argon2.hash(password);
  // hash the password
  //const salt = await bcrypt.genSaltSync(process.env.SALT_ROUNDS);
 // const hashedPassword = await bcrypt.hashSync(password, salt);

  const real = req.body;
  const user = await User({ 
    
    ...req.body,password: hashedPassword
    
  });
  await user.save();
  res.status(201).json({ message: "Staff has been created is created" });
};
*/
//reset password
/*
export const reset = async (req, res) => {
   const {email}= req.body;
  const user = await User.findOne({ email });

  if (!user) {
    res.status(406).json({ message: "The email address is not found" });
    return;
  } 
  let token = await Token.findOne({ _id: user._id });
  if (token) { 
        await token.deleteOne()
  };
  let resetToken = crypto.randomBytes(32).toString("hex");
  let hashedToken = await argon2.hash(resetToken);
  await new Token({
    userId: staff._id,
    token: hashedToken,
    createdAt: Date.now(),
  }).save();
  const link = `${clientURL}/passwordReset?token=${resetToken}&id=${user._id}`;

  sendEmail(user.email,"Password Reset Request",{name: user.name,link: link,},"./template/requestResetPassword.handlebars");
  return link;
};
*/

export const login = async (req, res) => {
  const { email, password } = req.body;

  if(email==null || password==null){
    res.status(406).json({ message: "Password or Email cannot be Empty" });
    return;
  }
  const user = await User.findOne({ email });

  if (!user) {
    res.status(406).json({ message: "User credentials not found" });
    return;
  }
  try {
    if (await argon2.verify(user.password, password)) {
      // password match
    } else {
      res.status(406).json({ message: "credentials not found" });
      return;
    }
  } catch (err) {
   // res.status(406).json({ message: "something went wrong" });
  }

   


  // create jwt token
  const payload = {
    username: email,
    _id: user._id,
  };
  const token = jwt.sign(payload, process.env.JWT_SECRET);
  console.log(token);
  res.json({ message: "succesfully logged in.", token , user });
};
