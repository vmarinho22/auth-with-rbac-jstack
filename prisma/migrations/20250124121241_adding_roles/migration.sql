-- CreateEnum
CREATE TYPE "role" AS ENUM ('ADMIN', 'USER');

-- AlterTable
ALTER TABLE "accounts" ADD COLUMN     "role" "role" NOT NULL DEFAULT 'USER';
