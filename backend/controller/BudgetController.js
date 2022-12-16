import Budget from "../models/Budget.js";

export const create = async (req, res) => {
    const { budgetNumber, budgetDescription ,budgetAmount,budgetDate,budgetReceivingOffice,budgetPrice} = req.body;
    if(!budgetNumber){
        res.status(400).json({ code: 400, status: "Error", message: "Budget Number is required"});
        return;
      }else if(!budgetDescription){
        res.status(400).json({ code: 400, status: "Error", message: "Budget Amount is required"});
        return;
      }else if(!budgetAmount){
        res.status(400).json({ code: 400, status: "Error", message: "Budget Description is required"});
        return;
      }else if(!budgetDate){
        res.status(400).json({ code: 400, status: "Error", message: "Budget Date is required"});
        return;
      }else if(!budgetReceivingOffice){
        res.status(400).json({ code: 400, status: "Error", message: "Budget Receiving Office is required"});
        return;
      }

    const budget = await new Budget({ budgetNumber,budgetPrice, budgetDescription ,budgetAmount,budgetDate,budgetReceivingOffice});
    await budget.save();
    res.status(201).json({ message: "Success",budget  });
    return;
  };

export const index = async (req, res) => {
    const budgets =  await Budget.find({});
   // console.log(req.user._id)
    res.json({ budgets });
  };

  export const annual= async (req, res) => {
  
    const budgets =  await Budget.aggregate([{$group: {_id:null, sum_val:{$sum:"$budgetAmount"}}}]);
  
   
    res.json({"sum": budgets[0].sum_val });
  };

  export const amount= async (req, res) => {
  
    const budgets =  await Budget.aggregate([{$group: {_id:null, sum_val:{$sum:"$budgetAmount"}}}]);
  
   
    res.json({"sum": budgets[0].sum_val });
  };
