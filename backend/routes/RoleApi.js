import { Router } from "express";
//import passport from "passport";
import * as RoleController from "../controller/RoleController.js";
const router = Router();
//passport.authenticate("jwt", { session: false })
router.get(
  "/",
  
  RoleController.index
);

router.post(
  "/create",
  
  RoleController.create
);


router.patch("/:id", RoleController.patch);
router.delete("/:id", RoleController.destroy);

export default router;
