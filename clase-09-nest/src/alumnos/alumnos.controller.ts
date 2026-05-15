import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ValidationPipe,
  ParseIntPipe,
  BadRequestException,
} from '@nestjs/common';
import { AlumnosService } from './alumnos.service';
import { CreateAlumnoDto } from './dto/create-alumno.dto';
import { UpdateAlumnoDto } from './dto/update-alumno.dto';

@Controller('alumnos')
export class AlumnosController {
  constructor(private readonly alumnosService: AlumnosService) {}

  @Post()
  create(@Body() createAlumnoDto: CreateAlumnoDto) {
    return this.alumnosService.create(createAlumnoDto);
  }

  @Get()
  findAll() {
    return this.alumnosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.alumnosService.findOne(+id);
  }

  @Patch(':id')
  // Quiero TRANSFORMAR el body en un objeto UpdateAlumnoDto, y VALIDAR tipos de datos
  update(
    @Param('id') id: number,
    @Body(new ValidationPipe({ whitelist: true })) datos: UpdateAlumnoDto,
  ) {
    console.log(datos);
    return this.alumnosService.update(+id, datos);
  }

  @Delete(':id')
  remove(
    @Param(
      'id',
      new ParseIntPipe({
        exceptionFactory: (error) =>
          new BadRequestException('No se pudo parsear el id'),
      }),
    )
    id: string,
  ) {
    return this.alumnosService.remove(+id);
  }
}
