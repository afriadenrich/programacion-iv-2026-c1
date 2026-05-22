import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AutenticacionService } from './autenticacion.service';
import { UsuarioLoginDTO, UsuarioRegistroDTO } from './usuario.dto';
import { TokenGuard } from './token/token.guard';
import { Request } from 'express';

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
  @UseGuards(TokenGuard)
  rutaSegura(@Body('emailDelToken') email: any) {
    console.log(email);
    // SOLO Voy a poder acceder si tengo unt tóken válido

    return { mensaje: 'Acceso otorgado a ' + email };
  }
}
