import { inject, Injectable, OnInit, signal, WritableSignal } from '@angular/core';
import {
  AuthResponse,
  createClient,
  SupabaseClient,
  User,
  UserResponse,
} from '@supabase/supabase-js';
import { ILogin, IRegistro } from './auth.interfaces';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // Autenticación ¿QUIÉN SOY?
  // Autorización ¿A DÓNDE PUEDO ENTRAR?
  // Registrar mi usuario
  // Loguearme con mi usuario
  // Cerrar sesión
  // Saber si estoy logueado o no

  supabaseUrl = 'https://gtjiarttecmosslkoewz.supabase.co';

  publishableKey = 'sb_publishable_jORN5gqNJWuFBsYyyOB9Aw_by_z7mZR';

  supabase: SupabaseClient<any, 'public', 'public', any, any>;

  usuarioActual = signal<User | null>(null);

  constructor() {
    this.supabase = createClient(this.supabaseUrl, this.publishableKey);

    // Revisá si hay un usuario ya logueado, asi no hago el login
    this.supabase.auth.getUser().then((response: UserResponse) => {
      if (response.error) {
        console.log(response.error);
      } else {
        this.usuarioActual.set(response.data.user);
      }
    });
  }

  // ngOnInit() {
  //   this.supabase = createClient(this.supabaseUrl, this.publishableKey);
  // }

  async registrar(datos: IRegistro): Promise<void> {
    const response: AuthResponse = await this.supabase?.auth.signUp({
      email: datos.email,
      password: datos.password,
      options: {
        data: {
          nombre: datos.nombre,
        },
      },
    });

    if (response.error) {
      console.log(response.error);
    }
    {
      console.log(response.data);
      this.usuarioActual.set(response.data.user);
    }
  }

  async loguear({ email, password }: ILogin): Promise<void> {
    const response: AuthResponse = await this.supabase?.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (response.error) {
      console.log(response.error);
    }
    {
      console.log(response.data);
      this.usuarioActual.set(response.data.user);
    }
  }

  router = inject(Router);

  cerrarSesion() {
    this.supabase.auth.signOut();
    this.router.navigateByUrl('/auth/login');
  }

  // ----------------------
  // Cambiar contraseña
  // Olvidé mi contraseña
  // Olvidé mi usuario
  // Validar mi email
  // Loguearse con proveedores externos.
  // Validar roles...??????
}
