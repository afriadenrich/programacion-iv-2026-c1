import { Routes } from '@angular/router';
import { Referencia } from './pages/referencia/referencia';

export const routes: Routes = [
  {
    path: 'tutoriales',
    loadComponent: () => import('./pages/tutoriales/tutoriales').then((a) => a.Tutoriales),
  },
  {
    path: 'referencia',
    component: Referencia,
  },
];
