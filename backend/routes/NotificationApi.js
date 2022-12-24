import { Router } from "express";
import * as NotificationController from "../controller/NotificationController.js";
const router = Router();
router.get(
    "/",
    NotificationController.index
  );
router.get(
    "/:id",
    NotificationController.indexOne
  );
  router.post("/create", NotificationController.create);
  router.get("/get_unread", NotificationController.unRead);
  
  router.get("/read", NotificationController.read);
  
  router.get("/read_count", NotificationController.readCount);
  router.get("/unread_count", NotificationController.unReadCount);
  router.get("/mark_read/:id", NotificationController.markAsRead);
  router.get("/mark_unread/:id", NotificationController.markAsUnRead);
  

export default router;
