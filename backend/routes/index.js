import { Router } from "express";
import AuthApi from "./AuthApi.js";
import UserApi from "./UserApi.js";
import StaffApi from "./StaffApi.js";
const router = Router();

//const auth = passport.authenticate("jwt", { session: false });

//router.use("/transaction", auth, TransactionsApi);
router.use("/staff", StaffApi);
router.use("/auth", AuthApi);
router.use("/user", UserApi);

export default router;
