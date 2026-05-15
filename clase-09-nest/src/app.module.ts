import { Module, ValidationPipe } from '@nestjs/common';
import { UsuariosModule } from './usuarios/usuarios.module';
import { AppController } from './app.controller';
import { UsuariosService } from './usuarios/usuarios.service';
import { UsuariosController } from './usuarios/usuarios.controller';
import { AlumnosModule } from './alumnos/alumnos.module';
import { APP_PIPE } from '@nestjs/core';

@Module({
  imports: [UsuariosModule, AlumnosModule], // Importa el módulo y disponibiliza en este módulo TODO lo que el/los módulo/s importado/s exporte/n Y además inicializa los controllers.
  controllers: [AppController],
  // providers: [UsuariosService],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class AppModule {}
