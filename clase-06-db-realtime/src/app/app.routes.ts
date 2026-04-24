import { Routes } from '@angular/router';
import { Chat } from './chat/chat';
import { Juegos } from './juegos/juegos';

export const routes: Routes = [
  {
    path: 'chat',
    component: Chat,
  },
  {
    path: 'juegos',
    component: Juegos,
  },
];
