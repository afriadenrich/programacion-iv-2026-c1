import { inject } from '@angular/core';
import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { AuthService } from '../auth/auth.service';

export const estaLogueadoGuard: CanActivateFn = async (route, state) => {
  console.log(route);
  console.log(state);

  const authService = inject(AuthService);
  const router = inject(Router);

  // authService.usuarioActual(); Esto da siempre null por tema de asincronismos.

  // const { data, error } = await authService.supabase.auth.getUser();
  const { data } = await authService.supabase.auth.getUser(); // Busco si el usuario inició sesión.

  if (data.user) {
    return true;
  } else {
    return router.navigateByUrl('/auth/login');
  }
};
