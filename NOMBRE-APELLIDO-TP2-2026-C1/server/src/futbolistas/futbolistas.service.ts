import { Injectable } from '@nestjs/common';
import { CreateFutbolistaDto } from './dto/create-futbolista.dto';
import { UpdateFutbolistaDto } from './dto/update-futbolista.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Futbolista } from './entities/futbolista.schema';
import { Model } from 'mongoose';

@Injectable()
export class FutbolistasService {
  constructor(
    @InjectModel('Futbolista') private FutbolistaModel: Model<Futbolista>,
  ) {}

  async create(createFutbolistaDto: CreateFutbolistaDto) {
    const futbolistaCreado =
      await this.FutbolistaModel.create(createFutbolistaDto);
    return futbolistaCreado;
  }

  async findAll() {
    const futbolistas = await this.FutbolistaModel.find();
    return futbolistas;
  }

  async findOne(id: string) {
    const futbolista = await this.FutbolistaModel.findById(id);
    return futbolista;
  }

  async update(id: string, updateFutbolistaDto: UpdateFutbolistaDto) {
    console.log(updateFutbolistaDto);
    const futbolistaModificado = await this.FutbolistaModel.updateOne(
      { _id: id }, // filtro
      updateFutbolistaDto,
    );
    return futbolistaModificado;
  }

  async remove(id: string) {
    const futbolistaEliminado = await this.FutbolistaModel.deleteOne({
      _id: id,
    });
    return futbolistaEliminado;
  }
}
