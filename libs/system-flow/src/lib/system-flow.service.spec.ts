import { Test } from '@nestjs/testing';
import { SystemFlowService } from './system-flow.service';

describe('SystemFlowService', () => {
  let service: SystemFlowService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [SystemFlowService],
    }).compile();

    service = module.get(SystemFlowService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
