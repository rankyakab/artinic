import { Router } from "express";
//import passport from "passport";
import * as MemoController from "../controller/MemoController.js";
const router = Router();
//passport.authenticate("jwt", { session: false })
router.get(
  "/",
  
  MemoController.index
);

export default router;
