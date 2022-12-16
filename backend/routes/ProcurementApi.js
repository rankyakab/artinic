import { Router } from "express";
import * as Procurement from "../controller/ProcurementController.js";
const router = Router();

router.get(
    "/",
    
    Procurement.index
  );
  router.get(
    "/total_request",
    
    Procurement.totalRequest
  );
  router.get(
    "/total_pending",
    
    Procurement.totalPending
  );
  router.get(
    "/total_approved",
    
    Procurement.totalApproved
  );
  router.get(
    "/pending_request",
    
    Procurement.totalPendingRequest
  );
  router.get(
    "/approved_request",
    
    Procurement.totalApprovedRequest
  );
router.post(
  "/create",
  
  Procurement.create
);



export default router;
