import Payslip from "../models/Payslip.js";


//fetch all the voucher records in the system
export const index = async (req, res) => {
  const payslip =  await Payslip.find({});
  const count = await Payslip.countDocuments();
  if(count > 0){
    res.status(201).json({ code: 201, status: "success", message: "Records successfully retrieved", records: count, payslip });
  }else{
    res.status(400).json({ code: 400, status: "Error", message: "No record found"});
  }
  
};


//add new voucher record to the system
export const create = async (req, res) => {
  console.log(req.body);
  
  var records = req.body;
  if(records.length <= 0){
    res.status(400).json({ code: 400, status: "Error", message: "Payslip cannot be empty."});
  }else{

    const added = [];
    for(var i=0; i<records.length; i++){
      //var preparedBy = "detgd00ughgfdsf007655";//req.user;
    const payslip = await Payslip({
        period: records[i].period, 
        staffId: records[i].staffId, 
        grossSalary: records[i].grossSalary, 
        grossReimbursment: records[i].grossReimbursment, 
        grossDeductions: records[i].grossDeductions, 
        netAmount: records[i].netAmount, 
        earningsBreakdown: records[i].earningsBreakdown, 
        deductionBreakdown: records[i].deductionBreakdown
    });
        var savepayslip =  await payslip.save();
        if(savepayslip){
          added[i] = savepayslip;
        }

  }
    
    if(added.length > 0){

      res.status(201).json({ code: 201, status: "success", message: "New payslip successfully created", saved: added.length, added  });
      
    }else{
      res.status(400).json({ code: 400, status: "Error", message: "Payslip creation failed."});
    }

  }
  
  };


  //update existing voucher in the system
  /*export const update = async (req, res) => {
    
    if(!req.body._id){
      res.status(400).json({ code: 400, status: "Error", message: "Memo ID is required"});
    }else{
  
          const updateMemo = await Voucher.updateOne({ _id: req.body._id }, { $set : req.body });
      
      if(updateMemo){
        res.status(201).json({ code: 200, status: "success", message: "Memo successfully updated", updateMemo });
      }else{
        
        res.status(400).json({ code: 400, status: "Error", message: "Memo update failed please try again."});
        
      }
    } 
    
    };

    
    //delete voucher from the system
    export const destroy = async (req, res) => {
      var remove = await Voucher.findOneAndDelete({ _id: req.body._id });
      if(remove){
        res.status(201).json({ code: 201, status: "success", message: "Memo successfully deleted", remove });
      }else{
        res.status(400).json({ code: 400, status: "Error", message: "Could not delete memo please try again."});
      }
      
    };*/


    //retrieve single voucher record from the system by id
    export const single = async (req, res) => {
      const payslip =  await Payslip.findById({ _id: req.body._id }).exec();
      if(payslip){
        res.status(201).json({ code: 20, status: "success", message: "Single record retrieved", payslip });
      }else{
        res.status(404).json({ code: 404, status: "error", message: "No record found" });
      }
      
    };


    //retireve all vouchers sent by a user
    export const mypayslip = async (req, res) => {
      const payslip =  await Payslip.find({ staffId: req.body.staffId }).exec();
      const count = await Payslip.countDocuments({ staffId: req.body.staffId });
      if(count > 0){
        res.status(201).json({ code: 201, status: "success", message: "User payment vouchers retrieved", records: count, payslip });
      }else{
        res.status(404).json({ code: 404, status: "error", message: "No record found" });
      }
    };