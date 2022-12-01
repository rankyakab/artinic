import { Router } from "express";
//import passport from "passport";
import * as StaffPositionController from "../controller/StaffPositionController.js";
const router = Router();
//passport.authenticate("jwt", { session: false })
router.get(
  "/",
  
  StaffPositionController.index
);

router.post(
  "/create",
  
  StaffPositionController.create
);


router.patch("/:id", StaffPositionController.patch);
router.delete("/:id", StaffPositionController.destroy);

export default router;
