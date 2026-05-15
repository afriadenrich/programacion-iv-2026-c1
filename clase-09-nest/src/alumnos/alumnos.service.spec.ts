import { Test, TestingModule } from '@nestjs/testing';
import { AlumnosService } from './alumnos.service';

describe('AlumnosService', () => {
  let service: AlumnosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AlumnosService],
    }).compile();

    service = module.get<AlumnosService>(AlumnosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
