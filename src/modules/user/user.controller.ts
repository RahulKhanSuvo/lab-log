import { RequestHandler } from "express";
import { userServices } from "./user.service";

const userRegister: RequestHandler = async (req, res) => {

    try {
        const payload = req.body
        console.log(payload)
        const result = await userServices.registerUser(payload)
        console.log(result)
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
export const userController = { userRegister }