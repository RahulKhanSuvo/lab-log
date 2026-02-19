import { RequestHandler } from "express";

const userRegister: RequestHandler = async (req, res) => {

    try {
        const payload = req.body
        console.log(payload)
        res.status(201).json({
            success: true,
            message: "user created successful"
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "internal server error"
        })

    }

}
export const userController = { userRegister }