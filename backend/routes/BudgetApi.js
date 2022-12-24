import { Router } from "express";
import * as BudgetController from "../controller/BudgetController.js";
const router = Router();

router.get(
    "/history",
    
    BudgetController.index
  );
  router.delete("/:id", BudgetController.destroy);
  router.get(
    "/annual",
    
    BudgetController.annual
  );
  router.get(
    "/actual",
    
    BudgetController.actual
  );
  
router.post(
  "/create",
  
  BudgetController.create
);
router.patch("/:id", BudgetController.patch);


export default router;
