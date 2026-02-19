import { Router } from "express";
import userRouter from "../../modules/user/user.route";
import equipmentRouter from "../../modules/equipment/equipment.route";
import usageRoute from "../../modules/usage-log/usage.route";

const routes = Router()
routes.use("/user", userRouter)
routes.use("/equipment", equipmentRouter)
routes.use("/usages", usageRoute)

export default routes