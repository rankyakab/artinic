import Stock from "../models/Stock.js";
import SystemLogs  from "../models/SystemLogs.js";

export const create = async (req, res) => {
    const { productId, batchNo ,quantity,price} = req.body;
      //Update logs
  const logs = await SystemLogs({

    logName: "Create Stock",
    logEvent: "Requested to Create Stock",
    logActivity: "Create",
    logUserId: req.user._id

  });

  await logs.save();

    if(!productId){
        const errorLog = await  SystemLogs({

            logName: "Create Stock",
            logEvent: "Log failed cause there was no Product id provided",
            logActivity: "Create stock failed",
            logUserId: req.user._id
        
          });
        
          await errorLog.save();

        res.status(400).json({ code: 400, status: "Error", message: "Budget Number is required"});
       
        return;
      }else if(!batchNo){
        const errorLog = await SystemLogs({

            logName: "Create Stock",
            logEvent: "Log failed cause there was no Batch No provided",
            logActivity: "Create stock failed",
            logUserId: req.user._id
        
          });
        
          await errorLog.save();
        res.status(400).json({ code: 400, status: "Error", message: "Budget Amount is required"});
        return;
      }else if(!quantity){
        const errorLog = await SystemLogs({

            logName: "Create Stock",
            logEvent: "Log failed cause there was no quantity for product provided",
            logActivity: "Create stock failed",
            logUserId: req.user._id
        
          });
        
          await errorLog.save();
        res.status(400).json({ code: 400, status: "Error", message: "Budget Description is required"});
        return;
      }else if(!price){
        const errorLog = await SystemLogs({

            logName: "Create Stock",
            logEvent: "Log failed cause there was no Price for product provided",
            logActivity: "Create stock failed",
            logUserId: req.user._id
        
          });
        
          await errorLog.save();
        res.status(400).json({ code: 400, status: "Error", message: "Budget Date is required"});
        return;
      }

    const stock = await new Stock({ productId, batchNo ,quantity,price} );
    await stock.save();
    const successLog = await SystemLogs({

        logName: "Create Stock",
        logEvent: "Log created Successfully",
        logActivity: "Create stock failed",
        logUserId: req.user._id
    
      });
    
      await successLog.save();
    res.status(201).json({ message: "Success",stock  });
    return;


  };


  export const patch = async (req, res) => {
    
    const  { batchNo ,quantity,price} = req.body;
    const Product = await Stock.findOne({ "_id":req.params.id });
    if (!Product) {
      const logs = await SystemLogs({

        logName: "Edit Stock",
        logEvent: "Stock do not exist",
        logActivity: "Edit",
        logUserId: req.user._id
    
      });
      logs.save();
      res.status(404).json({ message: "Stock do not exists." });
      return;
    }
  
     if(!batchNo){
        const logs = await SystemLogs({

          logName: "Edit Stock",
          logEvent: "Batch Number not provided",
          logActivity: "Edit",
          logUserId: req.user._id
      
        });
        logs.save();
        res.status(400).json({ code: 400, status: "Error", message: "Batch Number  is required"});
        return;
      }else if(!quantity){
         const logs = await SystemLogs({

        logName: "Edit Stock",
        logEvent: "Quantity not provided",
        logActivity: "Edit",
        logUserId: req.user._id
    
      });
      logs.save();
        res.status(400).json({ code: 400, status: "Error", message: "Quantity is required"});
        return;
      }else if(!price){
        const logs = await SystemLogs({

          logName: "Edit Stock",
          logEvent: "price not provided",
          logActivity: "Edit",
          logUserId: req.user._id
      
        });
        logs.save();
        res.status(400).json({ code: 400, status: "Error", message: "Budget Date is required"});
        return;
      }

    
    await Stock.updateOne({"_id":req.params.id}, {$set: { batchNo ,quantity,price}});
    const logs = await SystemLogs({

      logName: "Edit Stock",
      logEvent: "Stock edited successfully",
      logActivity: "Edit",
      logUserId: req.user._id
  
    });
    logs.save();
    res.json({ message: "success" });
  };
  
export const index = async (req, res) => {
    const stocks=  await Stock.find({});
    const logs = await SystemLogs({

      logName: "Fetch all stock",
      logEvent: "Requested to Fetch Stock",
      logActivity: "Fetch",
      logUserId: req.user._id
  
    });
  
    await logs.save();
    res.json({ stocks});
  };

  
  export const destroy = async (req, res) => {

    const stock = await Stock.findOne({ _id: req.params.id});
    //If user is not found
    if (!stock) {
          //Update logs
        const logs = await SystemLogs({

          logName: "Delete Stock",
          logEvent: "Stock do not exist",
          logActivity: "Delete",
          logUserId: req.user._id

        });

        await logs.save();
      res.status(406).json({ message: "Stock do not exist." });
      return;
    }
    var remove = await Stock.findOneAndDelete({ _id: req.params.id });
    if(remove){
      const logs = await SystemLogs({

        logName: "Delete Stock",
        logEvent: "Stock deleted successfully",
        logActivity: "Delete",
        logUserId: req.user._id

      });

      await logs.save();
    res.json({ message: "success" , remove });
    }else{
      const logs = await SystemLogs({

        logName: "Delete Stock",
        logEvent: "Stock delete failed",
        logActivity: "Delete",
        logUserId: req.user._id

      });

      await logs.save();
      res.status(400).json({  status: "Error", message: "Could not delete Stock please try again."});
    }
  };

  export const increment = async (req, res) => {

    const stock = await Stock.findOne({ _id: req.params.id});
    //If user is not found
    if (!stock) {
          //Update logs
        const logs = await SystemLogs({

          logName: "Increment Stock",
          logEvent: "Stock do not exist",
          logActivity: "Increment failed cause stock do not exist",
          logUserId: req.user._id

        });

        await logs.save();
      res.status(406).json({ message: "Stock do not exist." });
      return;
    }
    var inc = await Stock.updateOne(
      { _id: req.params.id },
      { $inc: { quantity: 1 } }
   );
    
    
    if(inc){
      const logs = await SystemLogs({

        logName: "Increment Stock",
        logEvent: "Stock Incremented successfully",
        logActivity: "Increment",
        logUserId: req.user._id

      });

      await logs.save();
    res.json({ message: "success" , inc });
    }else{
      const logs = await SystemLogs({

        logName: "Increment Stock",
        logEvent: "Stock Increment failed",
        logActivity: "Increment",
        logUserId: req.user._id

      });

      await logs.save();
      res.status(400).json({  status: "Error", message: "Could not increment Stock please try again."});
    }
  };
 
  export const decrement = async (req, res) => {

    const stock = await Stock.findOne({ _id: req.params.id});
    //If user is not found
    if (!stock) {
          //Update logs
        const logs = await SystemLogs({

          logName: "Decrement Stock",
          logEvent: "Stock do not exist",
          logActivity: "Decrement failed cause stock do not exist",
          logUserId: req.user._id

        });

        await logs.save();
      res.status(406).json({ message: "Stock do not exist." });
      return;
    }
    let factor = -1;
     if(stock.quantity<1){
      factor=0;
     }
    var inc =  await Stock.updateOne(
      { _id: req.params.id },
      { $inc: { quantity: factor } }
   );
    
    if(inc){
      const logs = await SystemLogs({

        logName: "Increment Stock",
        logEvent: "Stock Incremented successfully",
        logActivity: "Increment",
        logUserId: req.user._id

      });

      await logs.save();
    res.json({ message: "success" , inc });
    }else{
      const logs = await SystemLogs({

        logName: "Increment Stock",
        logEvent: "Stock Increment failed",
        logActivity: "Increment",
        logUserId: req.user._id

      });

      await logs.save();
      res.status(400).json({  status: "Error", message: "Could not increment Stock please try again."});
    }
  };
 
