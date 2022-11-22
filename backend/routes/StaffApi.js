import { Router } from "express";
//import passport from "passport";
import * as StaffController from "../controller/StaffController.js";
const router = Router();
//passport.authenticate("jwt", { session: false })
router.get(
  "/",
  
  StaffController.index
);

export default router;
