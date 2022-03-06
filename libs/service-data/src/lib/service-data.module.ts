import { Module } from '@nestjs/common';
import { ServiceDataController } from './service-data.controller';
import { ServiceDataService } from './service-data.service';

@Module({
  controllers: [ServiceDataController],
  providers: [ServiceDataService],
  exports: [ServiceDataService],
})
export class ServiceDataModule {}
