import { RequestHandler } from "express";
import { equipmentService } from "./equipment.service";

const createEquipment: RequestHandler = async (req, res) => {
    try {
        const result = await equipmentService.createEquipment(req.body)
        res.status(201).json({
            success: true,
            result
        })
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error?.message || "Internal server error",
        });
    }
}
const getAllEquipment: RequestHandler = async (req, res) => {
    try {
        const result = await equipmentService.getAllEquipment()
        res.status(200).json({
            success: true,
            result
        })
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error?.message || "Internal server error",
        });
    }
}
export const equipmentController = {
    createEquipment
    , getAllEquipment
}