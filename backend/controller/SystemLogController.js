import   systemLogSchema    from "../models/systemLogSchema.js"




export const logUser = async (req, res) => {
  const logUserId = req.user.id;
  const user = req.user;
  
  const { logName, logEvent, logActivity, userId } = req.params;

  
  const log = await systemLogSchema({ 
    
    logName,logEvent,logActivity,logUserId
    
  });
  await user.save();
 return;
};
