import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Query,
  Body,
  Header,
  Headers,
} from '@nestjs/common';
import { UsuariosService } from './usuarios.service';

/* 1. Defino el controller y la ruta principal @Controller("usuarios")

2. Definimos cada Verbo y ruta particular @Get("/"), @Get(/:id), @Post(), etc. y definimos su método en la línea siguiente

3. Obtener todos los datos necesarios para cada ruta @Param(), @Req(), @Res(), @Query(), @Body(), etc. https://docs.nestjs.com/controllers#request-object

4.1. Instancio el servicio. Inyección de dependencias.

4.2. Llamar a los métodos correspondientes del servicio
*/
@Controller('usuarios')
export class UsuariosController {
  // 4.1. Inyecto el servicio
  constructor(private usuarioS: UsuariosService) {}

  // Traer todos
  @Get('')
  traerTodos(@Query() queryParams: any) {
    return this.usuarioS.traerTodos(queryParams);
  }

  // Traer por id
  @Get(':id')
  traerPorId(@Param('id') id: string) {
    return this.usuarioS.traerPorId(id);
  }

  // Crear
  @Post()
  crear(@Body() usuarioACrear: any) {
    return this.usuarioS.crear(usuarioACrear);
  }

  // Modificar por id
  @Put(':id')
  modificarPorId(@Param('id') id: string, @Body() datosAModificar: any) {
    return this.usuarioS.modificar(id, datosAModificar);
  }

  // Eliminar por id
  @Delete(':id')
  eliminarPorId(@Param('id') id: string) {
    return this.usuarioS.eliminar(id);
  }
}
