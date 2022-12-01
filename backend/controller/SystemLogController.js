import   systemLogSchema    from "../models/systemLogSchema.js"




export const logUser = async (req, res) => {
  const logUserId = req.user.id;
  
  const { logName, logEvent, logActivity } = req.params;

  
  const log = await systemLogSchema({ 
    
    logName,logEvent,logActivity,logUserId
    
  });
  await user.save();
 return;
};
