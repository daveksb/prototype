import { Controller, Get, Param } from '@nestjs/common';
import { ServiceDataService } from './service-data.service';

@Controller('service-data')
export class ServiceDataController {
  constructor(private service: ServiceDataService) {}

  @Get('/page/:pageId')
  public getNextPage(@Param('pageId') pageId: string) {
    return this.service.getCurrentPageService(pageId);
  }
}
