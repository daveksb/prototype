import { Module } from '@nestjs/common';
import {
  ServiceDataController,
  ServiceDataService,
} from '@prototype/service-data';
import {
  SystemFlowController,
  SystemFlowService,
} from '@prototype/system-flow';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, SystemFlowController, ServiceDataController],
  providers: [AppService, SystemFlowService, ServiceDataService],
})
export class AppModule {}
