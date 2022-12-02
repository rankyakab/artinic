import { Router } from "express";
import passport from "passport";
import AuthApi from "./AuthApi.js";
import DeductionApi from "./DeductionApi.js";
import EmployeeDeductionApi from "./EmployeeDeductionApi.js";
import EmployeeEarningApi from "./EmployeeEarningApi.js";
import CircularApi from "./CircularApi.js";
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
import Allowance from "./AllowanceApi.js";

const router = Router();

const auth = passport.authenticate("jwt", { session: false });

//router.use("/transaction", auth, TransactionsApi);
router.use("/allowance", Allowance);
router.use("/deduction", DeductionApi);
router.use("/employee_deduction", EmployeeDeductionApi);
router.use("/employee_earning", EmployeeEarningApi);
router.use("/staff", passport.authenticate("jwt", { session: false }), StaffApi);
router.use("/staffPosition", StaffPositionApi);
router.use("/auth", AuthApi);
router.use("/circular", CircularApi);
router.use("/group", GroupApi);
router.use("/role", RoleApi);
router.use("/user", passport.authenticate("jwt", { session: false }),UserApi);
router.use("/user_group", UserGroupApi);
router.use("/memo", passport.authenticate("jwt", { session: false }), MemoApi);
router.use("/voucher", passport.authenticate("jwt", { session: false }),VoucherApi);
router.use("/payslip", passport.authenticate("jwt", { session: false }), PayslipApi);
router.use("/payroll",  passport.authenticate("jwt", { session: false }),Payroll);
export default router;
