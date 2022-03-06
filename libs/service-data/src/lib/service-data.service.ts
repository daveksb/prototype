import { Injectable } from '@nestjs/common';
import { PrismaClient, Service } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class ServiceDataService {
  async getCurrentPageService(pageId: string): Promise<Service> {
    const currentPage = await prisma.systemFlow.findUnique({
      where: {
        id: pageId,
      },
    });

    return prisma.service.findUnique({
      where: {
        id: currentPage.service_id,
      },
    });
  }
}
