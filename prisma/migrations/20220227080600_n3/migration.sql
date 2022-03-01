/*
  Warnings:

  - You are about to drop the `ServiceData` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `system_flow` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "ServiceData";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "system_flow";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "SystemFlow" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "flow_name" TEXT NOT NULL,
    "flow_order" INTEGER NOT NULL,
    "page" TEXT NOT NULL,
    "service_id" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Service" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "details" TEXT NOT NULL,
    "approval_id" TEXT NOT NULL
);
