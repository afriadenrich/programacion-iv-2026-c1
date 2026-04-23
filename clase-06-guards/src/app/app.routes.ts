import { Routes } from '@angular/router';
import { authRoutes } from './auth/auth.routes';
import { Resultados } from './resultados/resultados';
import { estaLogueadoGuard } from './guards/esta-logueado-guard';
export const routes: Routes = [
  {
    path: 'auth',
    children: authRoutes,
  },
  {
    path: 'juegos/ahorcado',
    loadComponent: () => import('./juegos/ahorcado/ahorcado').then((c) => c.Ahorcado),
    canActivate: [estaLogueadoGuard],
  },
  {
    path: 'resultados',
    component: Resultados,
  },
];
