import { Test } from '@nestjs/testing';
import { ServiceDataService } from './service-data.service';

describe('ServiceDataService', () => {
  let service: ServiceDataService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ServiceDataService],
    }).compile();

    service = module.get(ServiceDataService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
