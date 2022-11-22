import Circular from "../models/Circular.js";

export const index = async (req, res) => {
  const circular =  await Circular.find({});
  res.json({ circular });
};



export const create = async (req, res) => {
  //const { amount, description, date, category_id } = req.body;
  const circular = new User(res.body);
  await circular.save();
  res.json({ message: "Success",circular  });
};


export const destroy = async (req, res) => {
  await Circular.findOneAndDelete({ _id: req.params.id });
  res.json({ message: "success" });
};

export const patch = async (req, res) => {
  await Circular.updateOne({ _id: req.params.id }, {$set: req.body});
  res.json({ message: "success" });
};
