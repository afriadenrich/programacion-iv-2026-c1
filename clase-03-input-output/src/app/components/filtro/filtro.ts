import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-filtro',
  imports: [],
  templateUrl: './filtro.html',
  styleUrl: './filtro.css',
})
export class Filtro {
  nombre = input<string>('');
  estado = false;

  avisarEncendido = output<any>();

  cambiarEstado() {
    this.estado = !this.estado;

    this.avisarEncendido.emit({
      nombre: this.nombre(),
      estado: this.estado,
    });
  }
}
