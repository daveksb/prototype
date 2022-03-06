import { Injectable } from '@nestjs/common';
import { PrismaClient, SystemFlow } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class SystemFlowService {
  public getSystemFlows(): Promise<SystemFlow[]> {
    return prisma.systemFlow.findMany();
  }

  public getFirstPage(flowName: string): Promise<SystemFlow> {
    return prisma.systemFlow.findFirst({
      where: {
        flow_name: flowName,
      },
      orderBy: {
        flow_order: 'asc',
      },
    });
  }

  public getCurrentPage(flowId: string): Promise<SystemFlow> {
    return prisma.systemFlow.findFirst({
      where: {
        id: flowId,
      },
    });
  }

  async getNextPage(flowId: string): Promise<SystemFlow> {
    const currentRow = await prisma.systemFlow.findUnique({
      where: {
        id: flowId,
      },
    });

    return prisma.systemFlow.findFirst({
      where: {
        flow_order: {
          gt: currentRow.flow_order,
        },
      },
      orderBy: {
        flow_order: 'asc',
      },
    });
  }
}
