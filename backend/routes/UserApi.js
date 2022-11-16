import { Router } from "express";
//import passport from "passport";
import * as UserController from "../controller/UserController.js";
const router = Router();
//passport.authenticate("jwt", { session: false })
router.get(
  "/",
  
  UserController.index
);
router.post(
    "/create",
    
    UserController.create
  );
  router.delete("/:_id", UserController.destroy);
  
export default router;
