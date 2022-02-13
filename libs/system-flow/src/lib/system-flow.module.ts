import { Module } from '@nestjs/common';
import { SystemFlowController } from './system-flow.controller';
import { SystemFlowService } from './system-flow.service';

@Module({
  controllers: [SystemFlowController],
  providers: [SystemFlowService],
  exports: [SystemFlowService],
})
export class SystemFlowModule {}
