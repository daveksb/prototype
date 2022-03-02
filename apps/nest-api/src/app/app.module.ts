import { Module } from '@nestjs/common';
import {
  SystemFlowController,
  SystemFlowService,
} from '@prototype/system-flow';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BrowserModule } from '@angular/platform-browser';

@Module({
  imports: [BrowserModule, BrowserAnimationsModule],
  controllers: [AppController, SystemFlowController],
  providers: [AppService, SystemFlowService],
})
export class AppModule {}
