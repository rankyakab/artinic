import Memo from "../models/Memo.js";


//fetch all the memo records in the system
export const index = async (req, res) => {
  const memos =  await Memo.find({});
  const count = await Memo.countDocuments();
  if(count > 0){
  res.status(201).json({ code: 201, status: "success", message: "Records successfully retrieved", records: count, memos });
}else{
  res.status(400).json({ code: 400, status: "Error", message: "No record found"});
}
};


//add new memo record to the system
export const create = async (req, res) => {
  //const { memoType } = req.body;
  const { memoDate, refId, memoTitle, memoBody, attachment, attachemntType, memoType, completion, activities } = req.body;
  if(!memoDate){
    res.status(400).json({ code: 400, status: "Error", message: "Memo date is required"});
  }else if(!refId){
    res.status(400).json({ code: 400, status: "Error", message: "Memo reference id is required"});
  }else if(!memoTitle){
    res.status(400).json({ code: 400, status: "Error", message: "Memo title is required"});
  }else if(!memoBody){
    res.status(400).json({ code: 400, status: "Error", message: "Memo body is required"});
  }else if(!memoType){
    res.status(400).json({ code: 400, status: "Error", message: "Memo type is required"});
  }else if(!activities || activities.length == 0){
    res.status(400).json({ code: 400, status: "Error", message: "Memo recipient details are required"});
  }else{
    
    var ownerId = "detgd00ughgfdsf007655";//req.user;
    const memo = await Memo({
          memoDate : req.body.memoDate,
          refId : req.body.refId,
          memoTitle : req.body.memoTitle,
          memoBody : req.body.memoBody,
          ownerId : ownerId,
          attachment : req.body.attachment,
          attachemntType : req.body.attachemntType,
          memoType : req.body.memoType,
          completion : req.body.completion,
          activities : req.body.activities
    });
    var savememo = await memo.save();

    if(savememo){

      res.status(200).json({ code: 200, status: "success", message: "New memo successfully created", memo  });
      
    }

  } 
  
  };


  //update existing memo in the system
  export const update = async (req, res) => {
    
    if(!req.body._id){
      res.status(400).json({ code: 400, status: "Error", message: "Memo ID is required"});
    }else{
  
          const updateMemo = await Memo.updateOne({ _id: req.body._id }, { $set : req.body });
      
      if(updateMemo){
        res.status(201).json({ code: 201, status: "success", message: "Memo successfully updated", updateMemo });
      }else{
        
        res.status(400).json({ code: 400, status: "Error", message: "Memo update failed please try again."});
        
      }
    } 
    
    };

    
    //delete memo from the system
    export const destroy = async (req, res) => {
      var remove = await Memo.findOneAndDelete({ _id: req.body._id });
      if(remove){
        res.status(201).json({ code: 201, status: "success", message: "Memo successfully deleted", remove });
      }else{
        res.status(400).json({ code: 400, status: "Error", message: "Could not delete memo please try again."});
      }
      
    };


    //retrieve single memo record from the system by id
    export const single = async (req, res) => {
      const memo =  await Memo.findById({ _id: req.body._id }).exec();
      if(memo){
        res.status(201).json({ code: 201, status: "success", message: "Single record retrieved", memo });
      }else{
        res.status(404).json({ code: 404, status: "error", message: "No record found" });
      }
      
    };


    //retireve all memos sent by a user
    export const sentmemo = async (req, res) => {
      const memo =  await Memo.find({ ownerId: req.body.ownerId }).exec();
      const count = await Memo.countDocuments({ownerId: req.body.ownerId});
      if(count > 0){
        res.status(201).json({ code: 201, status: "success", message: "User memos retrieved", records: count, memo });
      }else{
        res.status(404).json({ code: 404, status: "error", message: "No record found" });
      }
    };



    
  
  