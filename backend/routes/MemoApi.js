import { Router } from "express";
//import passport from "passport";
import * as MemoController from "../controller/MemoController.js";
const router = Router();
//passport.authenticate("jwt", { session: false })
router.get("/", MemoController.index); //retrieve all memos

router.get("/single", MemoController.single); //retrieve all memos

router.get("/sentmemo/", MemoController.sentmemo); //retrieve all memos belonging to user

router.post("/create", MemoController.create); //create new memo

router.patch("/:id", MemoController.update); //update memo

router.delete("/:id", MemoController.destroy); //delete single memo

export default router;
