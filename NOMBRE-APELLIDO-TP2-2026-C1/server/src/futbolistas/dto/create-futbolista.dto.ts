/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class CreateFutbolistaDto {
  @IsString()
  nombre: string;

  @IsNumber()
  edad: number;

  @IsBoolean()
  va_al_mundial: boolean;

  @IsString()
  pais: string;
}
