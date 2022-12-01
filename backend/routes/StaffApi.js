import { Router } from "express";
//import passport from "passport";
import * as StaffController from "../controller/StaffController.js";
const router = Router();
//passport.authenticate("jwt", { session: false })
router.get(
  "/",
  
  StaffController.index
);
router.get(
  "/:id",
  
  StaffController.first
);

router.post(
  "/create",
  
  StaffController.create
);


router.patch("/:id", StaffController.patch);
router.delete("/:id", StaffController.destroy);

export default router;
