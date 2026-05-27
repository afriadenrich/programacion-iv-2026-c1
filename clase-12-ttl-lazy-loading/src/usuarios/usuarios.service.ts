import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { LazyModuleLoader } from '@nestjs/core';

@Injectable()
export class UsuariosService {
  constructor(private lazyModuleLoader: LazyModuleLoader) {}

  async create(createUsuarioDto: CreateUsuarioDto) {
    const { PersonasModule } = await import('../personas/personas.module.js');

    const personaModuleReference = await this.lazyModuleLoader.load(
      () => PersonasModule,
    );

    const { PersonasService } = await import('../personas/personas.service.js');

    const personaService = personaModuleReference.get(PersonasService);

    return personaService.create(createUsuarioDto);
  }

  findAll() {
    return `This action returns all usuarios`;
  }

  findOne(id: number) {
    return `This action returns a #${id} usuario`;
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return `This action updates a #${id} usuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} usuario`;
  }
}
