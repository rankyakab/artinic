import Memo from "../models/Memo.js";

export const index = async (req, res) => {
  const memos =  await Memo.find({});
  res.json({ memos });
};

export const create = async (req, res) => {
    const { attachment } = req.body;

  //const staffExists = await Staff.findOne({ personalEmail });
  if (attachment) {
    res.status(406).json({ message: "Please Upload the attachment file" });
    return;
  }
    const memo = await Memo(res.body);
    await memo.save();
    res.status(201).json({ message: "Success",memo  });
  };
  
  