import { Routes } from '@angular/router';
import { authRoutes } from './auth/auth.routes';
export const routes: Routes = [
  {
    path: 'auth',
    children: authRoutes,
  },
];
