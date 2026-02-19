import { Router } from "express";
import { usagesLogController } from "./usage.controller";

const usageRoute = Router()
usageRoute.post("/", usagesLogController.createUsageLog)
export default usageRoute