/*
  Warnings:

  - You are about to drop the column `type` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `gender` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "type",
DROP COLUMN "gender",
ADD COLUMN     "typeId" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "genderId" INTEGER NOT NULL DEFAULT 1;

-- DropEnum
DROP TYPE "Gender";

-- DropEnum
DROP TYPE "Type";

-- CreateTable
CREATE TABLE "Gender" (
    "id" SERIAL NOT NULL,
    "gender_name" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GlassType" (
    "id" SERIAL NOT NULL,
    "type_name" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Product" ADD FOREIGN KEY ("typeId") REFERENCES "GlassType"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD FOREIGN KEY ("genderId") REFERENCES "Gender"("id") ON DELETE CASCADE ON UPDATE CASCADE;
