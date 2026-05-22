import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Usuario {
  @Prop({ unique: true })
  email: string;

  @Prop()
  contraseña: string;

  @Prop()
  nombre: string;
}

export const UsuarioSchema = SchemaFactory.createForClass(Usuario);
