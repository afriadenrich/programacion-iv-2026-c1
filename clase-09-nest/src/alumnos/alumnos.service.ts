import { Injectable } from '@nestjs/common';
import { CreateAlumnoDto } from './dto/create-alumno.dto';
import { UpdateAlumnoDto } from './dto/update-alumno.dto';

@Injectable()
export class AlumnosService {
  create(createAlumnoDto: CreateAlumnoDto) {
    return 'This action adds a new alumno';
  }

  findAll() {
    return `This action returns all alumnos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} alumno`;
  }

  update(id: number, updateAlumnoDto: UpdateAlumnoDto) {
    return `This action updates a #${id} alumno`;
  }

  remove(id: number) {
    return `This action removes a #${id} alumno`;
  }
}
