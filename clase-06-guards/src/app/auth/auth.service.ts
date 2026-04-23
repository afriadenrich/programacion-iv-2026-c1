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
  supabaseUrl = 'https://gtjiarttecmosslkoewz.supabase.co';

  publishableKey = 'sb_publishable_jORN5gqNJWuFBsYyyOB9Aw_by_z7mZR';

  supabase: SupabaseClient<any, 'public', 'public', any, any>;

  usuarioActual = signal<User | null>(null);

  router = inject(Router);

  constructor() {
    this.supabase = createClient(this.supabaseUrl, this.publishableKey);

    this.supabase.auth.onAuthStateChange((event, session) => {
      // PODRÍA ver qué evento es y hacer algo distinto para cada uno.
      const user = session?.user;

      this.usuarioActual.set(user ?? null);

      // if (user) {
      //   this.router.navigateByUrl('');
      // } else {
      //   this.router.navigateByUrl('/auth/login');
      // }

      if (!user) {
        this.router.navigateByUrl('');
      }

      if (user) {
        this.router.navigateByUrl('');
      }
    });
  }

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
  }

  async loguear({ email, password }: ILogin): Promise<void> {
    const response: AuthResponse = await this.supabase?.auth.signInWithPassword({
      email: email,
      password: password,
    });
  }

  async cerrarSesion() {
    await this.supabase.auth.signOut();
  }
}
