import { Injectable } from '@nestjs/common';
import { PrismaClient, SystemFlow } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class SystemFlowService {
  public getSystemFlows(): Promise<SystemFlow[]> {
    return prisma.systemFlow.findMany();
  }

  public getSystemFlow(flowName: string): Promise<SystemFlow> {
    return prisma.systemFlow.findFirst({
      where: {
        flow_name: flowName,
      },
    });
  }
}
