import { Test } from '@nestjs/testing';
import { ServiceDataController } from './service-data.controller';
import { ServiceDataService } from './service-data.service';

describe('ServiceDataController', () => {
  let controller: ServiceDataController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ServiceDataService],
      controllers: [ServiceDataController],
    }).compile();

    controller = module.get(ServiceDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
