import * as argon2 from "argon2";
import  crypto from "crypto";

import jwt from "jsonwebtoken";
import Staff from "../models/Staff.js";
import Token from "../models/Token.js";
import sendEmail from "../utils/emails/sendEmail.js";

const categories = [
  { label: "Travel", icon: "user" },
  { label: "Shopping", icon: "user" },
  { label: "Investment", icon: "user" },
  { label: "Bills", icon: "user" },
];



export const register = async (req, res) => {
  const { personalEmail, password, firstName, lastName } = req.body;

  const userExists = await Staff.findOne({ personalEmail });
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
  const user = await Staff({ 
    
    ...req.body,password: hashedPassword
    
  });
  await user.save();
  res.status(201).json({ message: "Staff has been created is created" });
};
//reset password
export const reset = async (req, res) => {
   const {email}= req.body;
  const staff = await Staff.findOne({ email });

  if (!staff) {
    res.status(406).json({ message: "The email address is not found" });
    return;
  } 
  let token = await Token.findOne({ staffId: staff._id });
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


export const login = async (req, res) => {
  const { personalEmail, password } = req.body;

  
  const staff = await Staff.findOne({ personalEmail });

  if (!staff) {
    res.status(406).json({ message: "Staff credentials not found" });
    return;
  }
  
  if (!staff.isAuthenticated) {
    res.status(406).json({ message: "Staff is not an authenticated staff" });
    return;
  }
 const passwordMatch = await argon2.verify(staff.password, password);
  //const matched = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
     res.status(406).json({ message: "credentials not found" });
    return;
  }


  // create jwt token
  const payload = {
    username: personalEmail,
    _id: staff._id,
  };
  const token = jwt.sign(payload, process.env.JWT_SECRET);
  res.json({ message: "succesfully logged in.", token , staff });
};
