import { Router } from "express";
//import passport from "passport";
import * as EmployeeEarningController from "../controller/EmployeeEarningController.js";
const router = Router();
//passport.authenticate("jwt", { session: false })
router.get(
  "/",
  
  EmployeeEarningController.index
);
router.post(
    "/create",
    
    EmployeeEarningController.create
  );
router.delete("/:id", EmployeeEarningController.destroy);
router.patch("/:id", EmployeeEarningController.patch);
  
export default router;
