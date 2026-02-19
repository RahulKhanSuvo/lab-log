import { RequestHandler } from "express";
import { usagesServices } from "./usage.service";
import { prisma } from "../../lib/prisma";

const createUsageLog: RequestHandler = async (req, res) => {
    try {
        const payload = req.body
        const result = await usagesServices.createUsages(payload)
        res.status(201).json({
            success: true,
            message: "user created successful",
            result: result
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error || "internal server error"
        })
    }
}
const getAllUsages: RequestHandler = async (req, res) => {
    try {
        const result = await prisma.usageLog.findMany({
            include: { user: true, equipment: true }
        })
        res.status(201).json({
            success: true,
            message: "get all successfully",
            result: result
        })

    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error || "internal server error"
        })
    }
}
export const usagesLogController = { createUsageLog, getAllUsages }