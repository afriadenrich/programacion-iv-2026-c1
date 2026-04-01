import { Routes } from '@angular/router';
import { Login } from './auth/login/login';
import { Register } from './auth/register/register';
import { Profile } from './main/profile/profile';
import { Dashboard } from './main/dashboard/dashboard';
import { Main } from './main/main';

export const routes: Routes = /* {path: "/", component: App, childern: */ [
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  {
    path: 'main',
    component: Main,
    children: [
      { path: 'dashboard', component: Dashboard }, // main/dashboard
      { path: 'profile', component: Profile },
    ],
  },
  //   { path: 'main/dashboard', component: Dashboard },
  //   { path: 'main/profile', component: Profile },
];
