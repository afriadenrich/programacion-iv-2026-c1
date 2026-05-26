import { Component, inject } from '@angular/core';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  auth = inject(Auth);

  logueoCookie() {
    this.auth.logueoCookie({ email: 'agustin@gmail.com', contraseña: '123456' });
  }

  getRutaPrincipal() {
    this.auth.getRutaPrincipal();
  }
}
