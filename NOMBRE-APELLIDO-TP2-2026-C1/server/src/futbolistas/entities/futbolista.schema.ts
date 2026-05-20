import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// import { Schema as SchemaMongoose } from 'mongoose';
// import * as mongoose from 'mongoose';

@Schema()
export class Futbolista {
  // @Prop({ type: mongoose.Schema.Types.ObjectId })
  // @Prop({ type: SchemaMongoose.Types.ObjectId })

  @Prop()
  nombre: string;

  @Prop()
  edad: number;

  @Prop()
  va_al_mundial: boolean;

  @Prop()
  pais: string;
}

export const FutbolistaSchema = SchemaFactory.createForClass(Futbolista);
