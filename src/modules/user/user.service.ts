import { User } from "../../generated/prisma/client"
import { prisma } from "../../lib/prisma"
import bcrypt from "bcrypt";
const registerUser = async (data: User) => {
    const hashPassword = await bcrypt.hash(data.password!, 10)
    return await prisma.user.create({
        data: {
            ...data,
            password: hashPassword
        }
    })
}
export const userServices = { registerUser }