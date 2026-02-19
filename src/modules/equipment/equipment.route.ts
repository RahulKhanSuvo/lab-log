import { Router } from "express";
import { equipmentController } from "./equipment.controller";
import { auth } from "../../middleware/auth";
import { Role } from "../../generated/prisma/enums";

const equipmentRouter = Router()
equipmentRouter.post("/", equipmentController.createEquipment)
equipmentRouter.get("/", auth(Role.ADMIN), equipmentController.getAllEquipment)
export default equipmentRouter