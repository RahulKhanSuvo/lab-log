import { RequestHandler } from "express";
import { usagesServices } from "./usage.service";

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
            message: "internal server error"
        })
    }
}
export const usagesLogController = { createUsageLog }