import { Router } from "express";
import passport from "passport";
import AuthApi from "./AuthApi.js";
import BudgetApi from "./BudgetApi.js";
import DeductionApi from "./DeductionApi.js";
import EmployeeDeductionApi from "./EmployeeDeductionApi.js";
import EmployeeEarningApi from "./EmployeeEarningApi.js";
import  CircularApi from "./CircularApi.js";
import CapacityBuildingApi from "./CapacityBuildingApi.js";
import GroupApi from "./GroupApi.js";
import RoleApi from "./RoleApi.js";
import UserApi from "./UserApi.js";
import UserGroupApi from "./UserGroupApi.js";
import StaffApi from "./StaffApi.js";
import StaffPositionApi from "./StaffPositionApi.js";
import MemoApi from "./MemoApi.js";
import Payroll from "./PayrollApi.js";
import VoucherApi from "./VoucherApi.js";

import PayslipApi from "./PayslipApi.js";
import Procurement from "./ProcurementApi.js";
import Allowance from "./AllowanceApi.js";

const router = Router();

const auth = passport.authenticate("jwt", { session: false });

//router.use("/transaction", auth, TransactionsApi);
router.use("/allowance", Allowance);
router.use("/budget", BudgetApi);
router.use("/deduction", DeductionApi);
router.use("/employee_deduction", EmployeeDeductionApi);
router.use("/employee_earning", EmployeeEarningApi);
router.use("/staff", passport.authenticate("jwt", { session: false }), StaffApi);
router.use("/staffPosition", StaffPositionApi);
router.use("/auth", AuthApi);
router.use("/circular", CircularApi);
router.use("/capacity_building", CapacityBuildingApi);
router.use("/group", GroupApi);
router.use("/role", RoleApi);
router.use("/user", passport.authenticate("jwt", { session: false }),UserApi);
router.use("/user_group", UserGroupApi);
router.use("/memo",  MemoApi);
router.use("/voucher",VoucherApi);
router.use("/payslip",  PayslipApi);
router.use("/payroll", Payroll);
router.use("/procurement", Procurement);
export default router;
