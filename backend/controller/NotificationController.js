import Notification from "../models/Notification.js";
import SystemLogs from "../models/SystemLogs.js";
export const index = async (req, res) => {
    
  const notification =  await Notification.find({'userId':req.user._id });
  res.json({notification});
};
export const indexOne = async (req, res) => {
  const {id}=  req.params;
   const notification =  await Notification.find({'_id':id});
   res.json({notification});
 };
export const unRead = async (req, res) => {
  const notification =  await Notification.find({"status": false,"userId":req.user._id });
  res.json({notification});
};
export const read = async (req, res) => {
    
   const notification =  await Notification.find({"status": true,"userId":req.user._id });
   res.json({notification});
 };
 

export const readCount = async (req, res) => {

  
 const count = await Notification.find({"status": true,"userId":req.user._id}).count();
  //res.status(201).json({ message: "user is created",user });
  res.status(201).json({ message: "success",count });

};

export const unReadCount = async (req, res) => {

  
 const count = await Notification.find({"status": false,"userId":req.user._id}).count();
  //res.status(201).json({ message: "user is created",user });
  res.status(201).json({ message: "success",count });

};


export const create = async (req, res) => {
    const {message}=  req.body;
   if(!message){
        const errorLog = await SystemLogs({

            logName: "Notification",
            logEvent: "Create Notification Failed",
            logActivity: "You failed to provide Message for the notification",
            logUserId: req.user._id
        
          });
        
          await errorLog.save();

       
        return;
      } 
  
 const notification = await new Notification({
  
  "userId":req.user._id,
  message
 });
  await notification.save();
  res.status(201).json({ message: "Notification is created",notification });
  return;

};
export const markAsRead = async (req, res) => {
    const {id}=  req.params;
  const notification = await Notification.findOne({ _id: id });
  if (!notification) {
    const errorLog = await SystemLogs({

        logName: "Notification",
        logEvent: "Mark Notification as read failed",
        logActivity: "this activity failed cause notification id do not exist",
        logUserId: req.user._id
    
      });
    
      await errorLog.save();

   
    
    res.status(404).json({ message: "Notification do not exists." });
    return;
  }

  await Notification.updateOne({ _id: id }, {$set: {"status":true}});
  res.json({ message: "success" });
};

export const markAsUnRead = async (req, res) => {
  const {id}=  req.params;
    const notification = await Notification.findOne({ _id: id });
    if (!notification) {
      const errorLog = await SystemLogs({
  
          logName: "Notification",
          logEvent: "Mark Notification as read failed",
          logActivity: "this activity failed cause notification id do not exist",
          logUserId: req.user._id
      
        });
      
        await errorLog.save();
  
     
      
      res.status(404).json({ message: "Notification do not exists." });
      return;
    }
  
    await Notification.updateOne({ _id: req.params.id }, {$set: {"status":false}});
    res.json({ message: "success" });
  };
  