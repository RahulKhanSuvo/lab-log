import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { Role } from "../generated/prisma/enums";
declare global {
    namespace Express {
        interface Request {
            user: JwtPayload & { id: string; role: Role }
        }
    }
}
export const auth = (...roles: Role[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
        try {
            const token = req.headers.authorization?.split(" ")[1]
            console.log(token)
            if (!token) {
                return res.status(401).json({
                    success: false,
                    message: "unauthorize access"
                })
            }
            const decode = jwt.verify(token, process.env.JWT_SECRET as string)
            if (!decode) {
                return res.status(401).json({
                    success: false,
                    message: "unauth"
                })
            }
            req.user = decode as JwtPayload & { id: string; role: Role }
            if (roles.length && !roles.includes(req.user.role)) {
                return res.status(403).json({ success: false, message: "Forbidden: insufficient permissions" });
            }
            next()


        } catch (error: any) {
            return res.status(401).json({
                success: false,
                message: error.message || "Invalid or expired token",
            });
        }
    }
}
