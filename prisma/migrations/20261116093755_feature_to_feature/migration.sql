/*
  Warnings:

  - You are about to drop the column `Feature` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "Feature",
ADD COLUMN     "feature" TEXT[] DEFAULT ARRAY[]::TEXT[];
