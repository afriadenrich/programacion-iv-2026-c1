import { Test, TestingModule } from '@nestjs/testing';
import { AlumnosController } from './alumnos.controller';
import { AlumnosService } from './alumnos.service';

describe('AlumnosController', () => {
  let controller: AlumnosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AlumnosController],
      providers: [AlumnosService],
    }).compile();

    controller = module.get<AlumnosController>(AlumnosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
