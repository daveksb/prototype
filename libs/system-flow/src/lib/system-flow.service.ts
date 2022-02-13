import { Injectable } from '@nestjs/common';
import { PrismaClient, system_flow } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class SystemFlowService {
  public getSystemFlows(): Promise<system_flow[]> {
    return prisma.system_flow.findMany();
  }
}
