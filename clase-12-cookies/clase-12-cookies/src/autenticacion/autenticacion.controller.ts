import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AutenticacionService } from './autenticacion.service';
import { UsuarioLoginDTO, UsuarioRegistroDTO } from './usuario.dto';
import { TokenGuard } from './token/token.guard';
import type { Request, Response } from 'express';

@Controller('autenticacion')
export class AutenticacionController {
  constructor(private readonly autenticacionService: AutenticacionService) {}

  @Post('/registro')
  async registrar(
    @Body() usuario: UsuarioRegistroDTO,
    @Res() response: Response,
  ) {
    const { jwt, usuarioCreado } =
      await this.autenticacionService.registrar(usuario);

    response.cookie('Authorization', jwt);

    return usuarioCreado;
  }

  @Post('/ingresar')
  async ingresar(
    @Body() usuario: UsuarioLoginDTO,
    @Res({ passthrough: true }) response: Response, // passthrough: true -> nest hace el response.send(con el retorno de la función)
    // passthrough: false -> YO hago el response.send()
    @Req() request: Request,
  ) {
    console.log(request.cookies);

    const { jwt, usuarioLogueado } =
      await this.autenticacionService.ingresar(usuario);

    // console.log(jwt, usuarioLogueado);
    response.cookie('Authorization', jwt, {
      httpOnly: true,
      sameSite: 'strict',
      secure: true,
      expires: new Date(Date.now() + 1000 * 60 * 15),
    });

    return usuarioLogueado;
  }

  @Get('/seguro')
  @UseGuards(TokenGuard)
  rutaSegura(@Body('emailDelToken') email: any) {
    console.log(email);
    // SOLO Voy a poder acceder si tengo unt tóken válido

    return { mensaje: 'Acceso otorgado a ' + email };
  }
}
