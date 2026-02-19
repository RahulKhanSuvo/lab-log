/*
  Warnings:

  - You are about to drop the `UsersLog` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "UsersLog" DROP CONSTRAINT "UsersLog_equipmentId_fkey";

-- DropForeignKey
ALTER TABLE "UsersLog" DROP CONSTRAINT "UsersLog_userId_fkey";

-- DropTable
DROP TABLE "UsersLog";

-- CreateTable
CREATE TABLE "UsesLog" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "equipmentId" TEXT NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3) NOT NULL,
    "purpose" TEXT NOT NULL,
    "nots" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UsesLog_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UsesLog" ADD CONSTRAINT "UsesLog_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsesLog" ADD CONSTRAINT "UsesLog_equipmentId_fkey" FOREIGN KEY ("equipmentId") REFERENCES "Equipment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
