/* eslint-disable @typescript-eslint/restrict-plus-operands */

import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  Headers,
  HttpCode,
  Param,
  Post,
  Put,
  Query,
  Req,
} from '@nestjs/common';
import type { Request } from 'express';

// Enrutador. La ruta base es /usuarios

@Controller('ejemplo')
export class UsuariosController {
  @Get('traer/:id/unoSolo')
  @HttpCode(200)
  @Header('Content-Type', 'text/plain')
  traerPorId(
    @Param('id') id: string,
    @Query('query') query: string,
    @Body() body: any,
    @Headers('Content-Type') contentType: string,
  ) {
    console.log(contentType);
    return id;
  }

  // usuarios.get("/", (req, res) => {
  // res.send(servicio.traerUsuarios());
  //})
  @Get()
  traerTodos() {
    return 'Usuarios';
  }

  /*
  @Get(':id')
  traerPorID(@Req() peticion: Request) {
    console.log(peticion.params.id);
    return 'Usuario por ID: ' + peticion.params.id;
  }
    */

  // Subruta /usuarios/crear
  @Post('crear')
  crear() {
    return 'Crear';
  }

  @Put()
  @HttpCode(204)
  modificar() {
    // return servicoUsuarios.modificar();
    return 'PUT';
  }

  @Delete()
  eliminar() {
    return 'DELETE';
  }
}
