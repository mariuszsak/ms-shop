/*
  Warnings:

  - You are about to drop the column `categoryId` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the `Category` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `type` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gender` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `brandId` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMALE', 'UNISEX');

-- CreateEnum
CREATE TYPE "Type" AS ENUM ('EYEGLASSES', 'SUNGLASSES');

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_categoryId_fkey";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "categoryId",
ADD COLUMN     "type" "Type" NOT NULL,
ADD COLUMN     "gender" "Gender" NOT NULL,
ADD COLUMN     "brandId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Category";

-- CreateTable
CREATE TABLE "Brand" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Product" ADD FOREIGN KEY ("brandId") REFERENCES "Brand"("id") ON DELETE CASCADE ON UPDATE CASCADE;
