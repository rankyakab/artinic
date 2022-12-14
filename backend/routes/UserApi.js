import { Router } from "express";
import passport from "passport";
import * as UserController from "../controller/UserController.js";
const router = Router();
//passport.authenticate("jwt", { session: false })
router.get(
  "/", passport.authenticate("jwt", { session: false }),
  
  UserController.index
);
//user count
router.get(
  "/count",
  
  UserController.count
);
router.post(
    "/create",
    
    UserController.create
  );
router.delete("/:id", UserController.destroy);
router.delete("/delete/:id", UserController.destroyPatch);
router.patch("/:id", UserController.patch);
  
export default router;
