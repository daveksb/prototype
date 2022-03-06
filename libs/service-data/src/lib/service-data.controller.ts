import { Controller } from '@nestjs/common';
import { ServiceDataService } from './service-data.service';

@Controller('service-data')
export class ServiceDataController {
  constructor(private serviceDataService: ServiceDataService) {}
}
