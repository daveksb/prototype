import { Test } from '@nestjs/testing';
import { SystemFlowController } from './system-flow.controller';
import { SystemFlowService } from './system-flow.service';

describe('SystemFlowController', () => {
  let controller: SystemFlowController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [SystemFlowService],
      controllers: [SystemFlowController],
    }).compile();

    controller = module.get(SystemFlowController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
