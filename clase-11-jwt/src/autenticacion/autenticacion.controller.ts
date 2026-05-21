import { Body, Controller, Get, Post } from '@nestjs/common';
import { AutenticacionService } from './autenticacion.service';
import { UsuarioLoginDTO, UsuarioRegistroDTO } from './usuario.dto';

@Controller('autenticacion')
export class AutenticacionController {
  constructor(private readonly autenticacionService: AutenticacionService) {}

  @Post('/registro')
  registrar(@Body() usuario: UsuarioRegistroDTO) {
    return this.autenticacionService.registrar(usuario);
  }

  @Post('/ingresar')
  ingresar(@Body() usuario: UsuarioLoginDTO) {
    return this.autenticacionService.ingresar(usuario);
  }

  @Get('/seguro')
  rutaSegura() {
    // SOLO Voy a poder acceder si tengo unt tóken válido
    return {};
  }
}
