-- CreateTable
CREATE TABLE "system_flow" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "flow_name" TEXT NOT NULL,
    "flow_order" INTEGER NOT NULL,
    "page" INTEGER NOT NULL,
    "approval_id" INTEGER NOT NULL
);
