import { Router } from "express";
import * as StockController from "../controller/StockController.js";
const router = Router();
//passport.authenticate("jwt", { session: false })
router.get( "/", StockController.index);
//create stock
router.get( "/increment/:id", StockController.increment);
//increment stock
router.get( "/decrement/:id", StockController.decrement);
//decrement stock
router.post("/create",StockController.create);
//edit stock
router.patch("/:id", StockController.patch);



router.delete("/:id", StockController.destroy);

  
export default router;
