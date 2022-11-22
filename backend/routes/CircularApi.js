import { Router } from "express";
//import passport from "passport";
import * as CircularController from "../controller/CircularController.js";
const router = Router();
//passport.authenticate("jwt", { session: false })
router.get(
  "/",
  
  CircularController.index
);
router.post(
    "/create",
    
    CircularController.create
  );
  router.delete("/:id", CircularController.destroy);
  
export default router;
