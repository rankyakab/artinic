import { Router } from "express";
//import passport from "passport";
import * as GroupController from "../controller/GroupController.js";
const router = Router();
//passport.authenticate("jwt", { session: false })
router.get(
  "/",
  
  GroupController.index
);
router.get(
    "/hello",
    
    GroupController.index
  );
router.get(
  "/:id",
  
  GroupController.indexOne
);

router.post(
  "/create",
  
  GroupController.create
);


router.patch("/:id", GroupController.patch);
router.delete("/:id", GroupController.destroy);

export default router;
