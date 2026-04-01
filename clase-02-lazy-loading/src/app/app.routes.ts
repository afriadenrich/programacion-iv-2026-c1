import { Routes } from '@angular/router';
// import { mainRoutes } from './main.routes';

// Carga diferida -> Carga perezosa -> Lazy Loading

export const routes: Routes = [
  { path: '', loadComponent: () => import('./bienvenida/bienvenida').then((m) => m.Bienvenida) },
  { path: 'login', loadComponent: () => import('./login/login').then((m) => m.Login) },
  {
    path: 'register',
    loadComponent: () => import('./register/register'),
    loadChildren: () => import('./main.routes').then((a) => a.mainRoutes),
  },
];
