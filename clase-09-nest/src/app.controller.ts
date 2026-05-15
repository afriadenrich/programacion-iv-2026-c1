import { Controller } from '@nestjs/common';
import { UsuariosService } from './usuarios/usuarios.service';

@Controller('app')
export class AppController {
  constructor(private usuarioS: UsuariosService) {}
}
