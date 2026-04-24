import { Component, inject } from '@angular/core';
import { Supabase } from '../services/supabase';

@Component({
  selector: 'app-juegos',
  imports: [],
  templateUrl: './juegos.html',
  styleUrl: './juegos.css',
})
export class Juegos {
  supabaseService = inject(Supabase);

  traer() {
    this.supabaseService.traer();
  }

  insertar() {
    this.supabaseService.insertar();
  }
  modificar() {
    this.supabaseService.modificar();
  }
  eliminar() {
    this.supabaseService.eliminar();
  }
}
