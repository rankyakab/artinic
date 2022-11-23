import { Router } from "express";
//import passport from "passport";
import * as EmployeeDeductionController from "../controller/EmployeeDeductionController.js";
const router = Router();
//passport.authenticate("jwt", { session: false })
router.get(
  "/",
  
  EmployeeDeductionController.index
);
router.post(
    "/create",
    
    EmployeeDeductionController.create
  );
router.delete("/:id", EmployeeDeductionController.destroy);
router.patch("/:id", EmployeeDeductionController.patch);
  
export default router;
