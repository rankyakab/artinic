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
  export const patch = async (req, res) => {
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

    const budgetExists = await Budget.findOne({ _id: req.params.id });
    if (!budgetExists) {
      res.status(404).json({ message: "Budget do not exists." });
      return;
    }
  
    await Budget.updateOne({ _id: req.params.id }, {$set: req.body});
    res.json({ message: "success" });
  };
  
export const index = async (req, res) => {
    const budgets =  await Budget.find({});
   // console.log(req.user._id)
    res.json({ budgets });
  };


  export const destroy = async (req, res) => {
  
    const budgetExists = await Budget.findOne({ _id: req.params.id});
    //If user is not found
    if (!budgetExists) {
      res.status(406).json({ message: "Budget do not exist." });
      return;
    }
    var remove = await Budget.findOneAndDelete({ _id: req.params.id });
    if(remove){
    res.json({ message: "success" , remove });
    }else{
      res.status(400).json({  status: "Error", message: "Could not delete memo please try again."});
    }
  };
  
  export const annual= async (req, res) => {
  
    const budgets =  await Budget.aggregate([{$group: {_id:null, sum_val:{$sum:"$budgetAmount"}}}]);
  
   
    res.json({"sum": budgets[0].sum_val });
  };

  export const actual= async (req, res) => {
  
    const budgets =  await Budget.aggregate([{$group: {_id:null, sum_val:{$sum:"$actualAmount"}}}]);
  
   
    res.json({"sum": budgets[0].sum_val });
  };
