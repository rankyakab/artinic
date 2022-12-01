import { Router } from "express";
//import passport from "passport";
import * as UserGroupController from "../controller/UserGroupController.js";
const router = Router();
//passport.authenticate("jwt", { session: false })
router.get(
  "/",
  
  UserGroupController.index
);
router.post(
    "/create",
    
    UserGroupController.create
  );
router.delete("/:id", UserGroupController.destroy);
router.delete("/delete/:id", UserGroupController.destroyPatch);
router.patch("/:id", UserGroupController.patch);
  
export default router;
