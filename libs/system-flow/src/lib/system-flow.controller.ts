import { Controller, Get } from '@nestjs/common';
import { SystemFlowService } from './system-flow.service';

@Controller('system-flow')
export class SystemFlowController {
  constructor(private systemFlowService: SystemFlowService) {}

  @Get()
  public getSystemFlows() {
    return this.systemFlowService.getSystemFlows();
  }
}
