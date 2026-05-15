import { ForbiddenException, HttpException, Injectable } from '@nestjs/common';

@Injectable()
export class UsuariosService {
  traerTodos(queryParams: any) {
    // SELECT * FROM usuarios WHERE ? ?  ?
    return 'traer TODOS';
  }

  traerPorId(id: string) {
    // SELECT * FROM usuarios WHERE id = id;
    return 'traer ' + id;
  }

  crear(usuario: any) {
    return usuario;
  }

  modificar(id: string, datosModificados: any) {
    return { id, datosModificados };
  }

  eliminar(id: string) {
    return id;
  }
}
