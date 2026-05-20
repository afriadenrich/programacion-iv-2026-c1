import { Module } from '@nestjs/common';
import { FutbolistasService } from './futbolistas.service';
import { FutbolistasController } from './futbolistas.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Futbolista, FutbolistaSchema } from './entities/futbolista.schema';
import { PaisSchema } from './entities/pais.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Futbolista.name, schema: FutbolistaSchema },
      { name: 'Pais', schema: PaisSchema },
      // { name: "Futbolista", schema: FutbolistaSchema },
    ]),
  ],
  controllers: [FutbolistasController],
  providers: [FutbolistasService],
})
export class FutbolistasModule {}
