import { Router } from "express";
import * as BudgetController from "../controller/BudgetController.js";
const router = Router();

router.get(
    "/history",
    
    BudgetController.index
  );
  router.get(
    "/annual",
    
    BudgetController.annual
  );
  
router.post(
  "/create",
  
  BudgetController.create
);



export default router;
