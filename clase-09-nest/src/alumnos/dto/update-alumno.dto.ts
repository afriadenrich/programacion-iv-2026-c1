import { PartialType } from '@nestjs/mapped-types';
import { CreateAlumnoDto } from './create-alumno.dto';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateAlumnoDto {
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  nombre?: string;

  @IsNumber()
  @IsOptional()
  edad?: number;
}
