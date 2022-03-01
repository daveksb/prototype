-- CreateTable
CREATE TABLE "Approval" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "approver" TEXT NOT NULL,
    "service_id" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "ServiceData" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "details" TEXT NOT NULL
);
