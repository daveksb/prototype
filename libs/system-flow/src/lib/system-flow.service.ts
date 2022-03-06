import { Injectable } from '@nestjs/common';
import { PrismaClient, SystemFlow } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class SystemFlowService {
  public getSystemFlows(): Promise<SystemFlow[]> {
    return prisma.systemFlow.findMany();
  }

  public getSystemFlow(flowId: string): Promise<SystemFlow> {
    return prisma.systemFlow.findFirst({
      where: {
        id: flowId,
      },
    });
  }
}
