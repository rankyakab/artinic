import { Router } from "express";
//import passport from "passport";
import * as PayslipController from "../controller/PayslipController.js";
const router = Router();
//passport.authenticate("jwt", { session: false })
router.get("/", PayslipController.index); //retrieve all memos

router.get("/single", PayslipController.single); //retrieve single payslip

router.get("/mypayslip", PayslipController.mypayslip); //retrieve all payslip for the loggedin user

router.post("/create", PayslipController.create); //create new payslip

export default router;