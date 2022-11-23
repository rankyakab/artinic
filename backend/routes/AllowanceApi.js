import { Router } from "express";
//import passport from "passport";
import * as AllowanceController from "../controller/AllowanceController.js";
const router = Router();
//passport.authenticate("jwt", { session: false })
router.get(
  "/",
  
  AllowanceController.index
);
router.post(
    "/create",
    
    AllowanceController.create
  );
router.delete("/:id", AllowanceController.destroy);
router.patch("/:id", AllowanceController.patch);
  
export default router;
