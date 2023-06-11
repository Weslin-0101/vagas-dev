/*
  Warnings:

  - You are about to drop the `User_Info` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User_Info";

-- CreateTable
CREATE TABLE "dev" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "job" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "dev_pkey" PRIMARY KEY ("id")
);
