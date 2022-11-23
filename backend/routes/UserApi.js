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
router.delete("/:id", UserController.destroy);
router.patch("/:id", UserController.patch);
  
export default router;
