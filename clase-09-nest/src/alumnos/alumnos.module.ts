import { Module, ValidationPipe } from '@nestjs/common';
import { AlumnosService } from './alumnos.service';
import { AlumnosController } from './alumnos.controller';
import { APP_PIPE } from '@nestjs/core';

@Module({
  controllers: [AlumnosController],
  providers: [AlumnosService],
})
export class AlumnosModule {}
