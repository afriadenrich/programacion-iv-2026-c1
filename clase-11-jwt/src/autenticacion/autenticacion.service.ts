import { Injectable } from '@nestjs/common';
import { UsuarioLoginDTO, UsuarioRegistroDTO } from './usuario.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Usuario } from './usuario.schema';
import { Model } from 'mongoose';
import { sign } from 'jsonwebtoken'; // Es un paquete de javascript -> npm i @types/jsonwebtoken -D para instalar el archivo .d.ts que lo disponibiliza en typescript SOLO PARA DESARROLLO

const CLAVE_SUPERSECRETA =
  'sdfasdpfosadfmosdp+situviejoeszapaterozarpalelalata+vivaAngular¬€#€#@~@~€@€@@¬~@~¬@☺';

@Injectable()
export class AutenticacionService {
  constructor(
    @InjectModel(Usuario.name) private usuarioModel: Model<Usuario>,
  ) {}

  async registrar(usuario: UsuarioRegistroDTO) {
    // Tomar los datos que llegan
    // Crear o verificar que los datos de login y registro sean válidos.
    // verifico contraseña con x cantidad de caracteres, mail válido, mail no registrado.

    // ENCRIPTAR O HASHEAR LA CONTRASEÑA

    const usuarioCreado = await this.usuarioModel.create(usuario);

    // CASO DE ÉXITO: Generar un tóken
    /*const encabezado = {
      typ: 'JWT',
      alg: 'HS256',
    }; */ // no hace falta porque el método lo pide distinto

    // JWT CLAIMS

    const payload = {
      email: usuarioCreado.email, // ¿Quién?
      exp: Date.now() + 1000 * 60 * 15, // En 15 minutos
    };

    // FIRMA... ¿Cómo hago la firma?

    const jwt = sign(payload, CLAVE_SUPERSECRETA, {
      algorithm: 'HS256',
      audience: 'registro',
    });

    return jwt;
    // CASO DE ERROR: status: 401 -> unauthorized
  }

  ingresar(usuario: UsuarioLoginDTO) {
    // Tomar los datos que llegan
    // Crear o verificar que los datos de login y registro sean válidos.
    // CASO DE ÉXITO: Generar un tóken
    // CASO DE ERROR: status: 401 -> unauthorized
    return usuario;
  }
}
