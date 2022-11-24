import { Router } from "express";
import passport from "passport";
import AuthApi from "./AuthApi.js";
import DeductionApi from "./DeductionApi.js";
import EmployeeDeductionApi from "./EmployeeDeductionApi.js";
import EmployeeEarningApi from "./EmployeeEarningApi.js";
import CircularApi from "./CircularApi.js";
import UserApi from "./UserApi.js";
import StaffApi from "./StaffApi.js";
import MemoApi from "./MemoApi.js";
import Payroll from "./PayrollApi.js";
import Allowance from "./AllowanceApi.js";

const router = Router();

const auth = passport.authenticate("jwt", { session: false });

//router.use("/transaction", auth, TransactionsApi);
router.use("/allowance", Allowance);
router.use("/deduction", DeductionApi);
router.use("/employee_deduction", EmployeeDeductionApi);
router.use("/employee_earning", EmployeeEarningApi);
router.use("/staff", StaffApi);
router.use("/auth", AuthApi);
router.use("/circular", CircularApi);
router.use("/user",UserApi);
router.use("/memo", MemoApi);
router.use("/payroll", Payroll);
export default router;
