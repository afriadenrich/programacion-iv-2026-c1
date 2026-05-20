import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Pais {
  @Prop()
  nombre: string;

  @Prop()
  bandera: string;
}

export const PaisSchema = SchemaFactory.createForClass(Pais);
