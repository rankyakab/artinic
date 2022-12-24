import { Router } from "express";
import * as CapacityBuilding from "../controller/CapacityBuildingController.js";
const router = Router();

router.get(
    "/",
    
    CapacityBuilding.index
  );

router.post(
    "/create",
    
    CapacityBuilding.create
  );
  
  

  router.get(
    "/total_training_request",
    
    CapacityBuilding.totalTrainingRequest
  );
  
  router.get(
    "/total_training_done",
    
    CapacityBuilding.totalTrainingDone
  );
  
  router.get(
    "/total_training_done",
    
    CapacityBuilding.totalTrainingDone
  );
  
  router.get(
    "/total_training_done",
    
    CapacityBuilding.totalApprovedRequest
  );
  
 

export default router;
