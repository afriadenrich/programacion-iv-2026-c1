import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Usuario {
  @Prop()
  email: string;

  @Prop()
  contraseña: string;

  @Prop()
  nombre: string;
}

export const UsuarioSchema = SchemaFactory.createForClass(Usuario);
