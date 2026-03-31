import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Home } from './pages/home/home';
import { Dashboard } from './pages/dashboard/dashboard';
import { Error } from './pages/error/error';

// Definen las rutas
// Asocian nombre a componentes
// Permite varias configuraciones

export const routes: Routes = [
  {
    path: 'home',
    component: Home,
  }, // "Cuando se entre a /home, borrar lo que haya en el router outlet, e instanciar HOME"
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Cuando se entre a /, llevame a HOME.
  // { path: '', component: Home }, // Ruta vacía // "Cuando se entre a /, borrar lo que haya en el router outlet, e instanciar HOME"
  {
    path: 'login',
    component: Login,
  },
  { path: 'dashboard', component: Dashboard },
  { path: '**', component: Error }, // COMODÍN -> Cualquier ruta que no esté definida ANTES de esta. SIEMPRE va al final
];
