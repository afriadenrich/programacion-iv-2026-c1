import { IsString } from 'class-validator';

export class UsuarioRegistroDTO {
  @IsString()
  email: string;

  @IsString()
  contraseña: string;

  @IsString()
  nombre: string;
}

export class UsuarioLoginDTO {
  @IsString()
  email: string;

  @IsString()
  contraseña: string;
}
