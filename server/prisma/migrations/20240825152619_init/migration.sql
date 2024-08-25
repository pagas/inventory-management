/*
  Warnings:

  - You are about to drop the column `unitConst` on the `Purchases` table. All the data in the column will be lost.
  - Added the required column `unitCost` to the `Purchases` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Purchases" DROP COLUMN "unitConst",
ADD COLUMN     "unitCost" DOUBLE PRECISION NOT NULL;
