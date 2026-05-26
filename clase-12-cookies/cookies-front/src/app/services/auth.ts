import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  apiUrl = 'http://localhost:3000';
  httpClient = inject(HttpClient);

  logueoCookie(usuario: Usuario) {
    const peticion = this.httpClient.post(this.apiUrl + '/autenticacion/ingresar', usuario, {
      credentials: 'include',
    });

    peticion.subscribe((res) => {
      console.log(res);
    });
  }

  getRutaPrincipal() {
    const peticion = this.httpClient.get(this.apiUrl + '/', {
      credentials: 'include',
    });

    peticion.subscribe((res) => {
      console.log(res);
    });
  }
}

interface Usuario {
  email: string;
  contraseña: string;
}
