import { Equipment, Prisma } from "../../generated/prisma/client";
import { prisma } from "../../lib/prisma";

const createEquipment = async (data: Omit<Equipment, "id" | "createdAt" | "updatedAt">) => {
    return await prisma.equipment.create({
        data: {
            ...data,
            metadata: data.metadata ?? Prisma.JsonNull
        }
    })

}
const getAllEquipment = async () => {
    return await prisma.equipment.findMany()
}
export const equipmentService = {
    createEquipment,
    getAllEquipment
}