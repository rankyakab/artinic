import User from "../models/User.js";

export const index = async (req, res) => {
  const users =  await User.find({});
  res.json({ users });
};

export const indexs = async (req, res) => {
  const demo = await User.aggregate([
    {
      $match: { user_id: req.user._id },
    },
    {
      $group: {
        _id: { $month: "$date" },
        transactions: {
          $push: {
            amount: "$amount",
            description: "$description",
            date: "$date",
            type: "$type",
            _id: "$_id",
          },
        },
        totalExpenses: { $sum: "$amount" },
      },
    },
    { $sort: { _id: 1 } },
  ]);
  res.json({ data: demo });
};

export const create = async (req, res) => {
  //const { amount, description, date, category_id } = req.body;
  const user = new User({
    firstName: "ranky",
    lastName: "akab",
    email: "rankyakabs@gmail.com",
    password: "confirmation password",
    department: [{ label: "management", icon: "bolla" }],
  });
  await user.save();
  res.json({ message: "Success",user  });
};


export const destroy = async (req, res) => {
  await User.findOneAndDelete({ _id: req.params.id });
  res.json({ message: "success" });
};

export const patch = async (req, res) => {
  await User.updateOne({ _id: req.params.id }, {$set: req.body});
  res.json({ message: "success" });
};
