import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'tutoriales',
    loadComponent: () => import('./pages/tutoriales/tutoriales').then((a) => a.Tutoriales),
  },
];
