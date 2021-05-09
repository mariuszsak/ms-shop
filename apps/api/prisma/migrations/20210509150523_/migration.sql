/*
  Warnings:

  - You are about to drop the column `name` on the `Brand` table. All the data in the column will be lost.
  - Added the required column `brand` to the `Brand` table without a default value. This is not possible if the table is not empty.
  - Added the required column `brand_name` to the `Brand` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Brand" DROP COLUMN "name",
ADD COLUMN     "brand" TEXT NOT NULL,
ADD COLUMN     "brand_name" TEXT NOT NULL;
