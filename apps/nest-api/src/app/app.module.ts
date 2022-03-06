import { Module } from '@nestjs/common';
import {
  SystemFlowController,
  SystemFlowService,
} from '@prototype/system-flow';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, SystemFlowController],
  providers: [AppService, SystemFlowService],
})
export class AppModule {}
