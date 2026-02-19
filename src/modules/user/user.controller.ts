import { RequestHandler } from "express";
import { userServices } from "./user.service";
import { prisma } from "../../lib/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
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
const loginUser: RequestHandler = async (req, res) => {
    try {
        const { email, password } = req.body
        console.log(req.body)
        const user = await prisma.user.findUnique({
            where: {
                email
            }
        })
        if (!user) return res.send({ message: "user not found" })
        const matchPassword = await bcrypt.compare(password, user.password)
        if (!matchPassword) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or passwords"
            })
        }
        const token = jwt.sign({ id: user.id, role: user.role, }, process.env.JWT_SECRET as string, {
            expiresIn: "15m"
        })
        const refreshToken = jwt.sign(
            { id: user.id },
            process.env.JWT_REFRESH_SECRET as string,
            { expiresIn: "7d" }
        );
        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
        });
        res.status(200).json({
            success: true,
            message: "Login successful",
            token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role,
            },
        });

    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error || "internal server error"
        })
    }
}
export const userController = { userRegister, loginUser }