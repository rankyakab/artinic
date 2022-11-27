import { Router } from "express";
//import passport from "passport";
import * as VoucherController from "../controller/VoucherController.js";
const router = Router();
//passport.authenticate("jwt", { session: false })
router.get("/", VoucherController.index); //retrieve all memos

router.get("/single", VoucherController.single); //retrieve single voucher

router.get("/sentvoucher", VoucherController.sentvoucher); //retrieve all voucher belonging to user

router.post("/create", VoucherController.create); //create new voucher

router.patch("/:id", VoucherController.update); //update voucher

router.delete("/:id", VoucherController.destroy); //delete single voucher

export default router;
