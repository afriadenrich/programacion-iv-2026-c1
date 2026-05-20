/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateFutbolistaDto {
  @IsString()
  @IsOptional()
  nombre: string;

  @IsOptional()
  @IsNumber()
  edad: number;

  @IsOptional()
  @IsBoolean()
  va_al_mundial: boolean;

  @IsOptional()
  @IsString()
  pais: string;
}
