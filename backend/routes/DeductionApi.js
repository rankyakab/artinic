import { Router } from "express";
//import passport from "passport";
import * as DeductionController from "../controller/DeductionController.js";
const router = Router();
//passport.authenticate("jwt", { session: false })
router.get(
  "/",
  
  DeductionController.index
);
router.post(
    "/create",
    
    DeductionController.create
  );
router.delete("/:id", DeductionController.destroy);
router.patch("/:id", DeductionController.patch);
  
export default router;
