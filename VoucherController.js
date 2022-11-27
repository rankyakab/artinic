import Voucher from "../models/Voucher.js";


//fetch all the voucher records in the system
export const index = async (req, res) => {
  const voucher =  await Voucher.find({});
  const count = await Voucher.countDocuments();
  if(count > 0){
    res.status(201).json({ code: 201, status: "success", message: "Records successfully retrieved", records: count, voucher });
  }else{
    res.status(400).json({ code: 400, status: "Error", message: "No record found"});
  }
  
};


//add new voucher record to the system
export const create = async (req, res) => {
  //const { memoType } = req.body;
  const { subject, beneficiaryAccountNumber, beneficiaryAccountName, beneficiaryBank, voucherSheet } = req.body;
  if(!subject){
    res.status(400).json({ code: 400, status: "Error", message: "Voucher subject is required"});
  }else if(!beneficiaryAccountNumber){
    res.status(400).json({ code: 400, status: "Error", message: "Beneficiary account number is required"});
  }else if(!beneficiaryAccountName){
    res.status(400).json({ code: 400, status: "Error", message: "Beneficiary account name is required"});
  }else if(!beneficiaryBank){
    res.status(400).json({ code: 400, status: "Error", message: "Beneficiary bank name is required"});
  }else if(!voucherSheet || voucherSheet.length == 0){
    res.status(400).json({ code: 400, status: "Error", message: "Voucher sheet details are required"});
  }else{
    
    var preparedBy = "detgd00ughgfdsf007655";//req.user;
    const voucher = await Voucher({
          preparedBy : preparedBy,
          subject : req.body.subject,
          beneficiaryAccountNumber : req.body.beneficiaryAccountNumber,
          beneficiaryAccountName : req.body.beneficiaryAccountName,
          beneficiaryBank : req.body.beneficiaryBank,
          voucherSheet : req.body.voucherSheet,
    });
    var savevoucher = await voucher.save();

    if(savevoucher){

      res.status(201).json({ code: 201, status: "success", message: "New payment voucher successfully created", savevoucher  });
      
    }else{
      res.status(400).json({ code: 400, status: "Error", message: "Payment voucher creation failed."});
    }

  } 
  
  };


  //update existing voucher in the system
  export const update = async (req, res) => {
    
    if(!req.body._id){
      res.status(400).json({ code: 400, status: "Error", message: "Memo ID is required"});
    }else{
  
          const updateMemo = await Voucher.updateOne({ _id: req.body._id }, { $set : req.body });
      
      if(updateMemo){
        res.status(201).json({ code: 201, status: "success", message: "Memo successfully updated", updateMemo });
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
      
    };


    //retrieve single voucher record from the system by id
    export const single = async (req, res) => {
      const voucher =  await Voucher.findById({ _id: req.body._id }).exec();
      if(voucher){
        res.status(201).json({ code: 201, status: "success", message: "Single record retrieved", voucher });
      }else{
        res.status(404).json({ code: 404, status: "error", message: "No record found" });
      }
      
    };


    //retireve all vouchers sent by a user
    export const sentvoucher = async (req, res) => {
      const voucher =  await Voucher.find({ preparedBy: req.body.preparedBy }).exec();
      const count = await Voucher.countDocuments({ preparedBy: req.body.preparedBy });
      if(count > 0){
        res.status(201).json({ code: 201, status: "success", message: "User payment vouchers retrieved", records: count, voucher });
      }else{
        res.status(404).json({ code: 404, status: "error", message: "No record found" });
      }
    };



    
  
  