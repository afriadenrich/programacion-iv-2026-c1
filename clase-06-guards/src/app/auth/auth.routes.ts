import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Register } from './register/register';
import { Auth } from './auth';

export const authRoutes: Routes = [
  {
    path: '',
    component: Auth,
    children: [
      {
        path: 'login',
        component: Login,
      },
      {
        path: 'register',
        component: Register,
      },
    ],
  },
];
