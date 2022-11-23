import { Router } from "express";
//import passport from "passport";
import * as PayrollController from "../controller/PayrollController.js";
const router = Router();
//passport.authenticate("jwt", { session: false })
router.get(
  "/",
  
  PayrollController.index
);

export default router;
