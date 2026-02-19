import { UsageLog } from "../../generated/prisma/client";
import { prisma } from "../../lib/prisma";

const createUsages = async (data: UsageLog) => {
    return await prisma.usageLog.create({
        data
    })
}
export const usagesServices = {
    createUsages
} 