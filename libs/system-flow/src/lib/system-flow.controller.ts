import { Controller, Get, Param } from '@nestjs/common';
import { SystemFlowService } from './system-flow.service';

@Controller('system-flow')
export class SystemFlowController {
  constructor(private service: SystemFlowService) {}

  @Get()
  public getSystemFlows() {
    return this.service.getSystemFlows();
  }

  @Get(':id')
  public getCurrentPage(@Param('id') id: string) {
    return this.service.getCurrentPage(id);
  }

  @Get('/next/:id')
  public getNextPage(@Param('id') id: string) {
    return this.service.getNextPage(id);
  }

  @Get('/first-page/:name')
  public getFirstPage(@Param('name') flowName: string) {
    return this.service.getFirstPage(flowName);
  }
}
