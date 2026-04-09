import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-filtro',
  imports: [],
  templateUrl: './filtro.html',
  styleUrl: './filtro.css',
})
export class Filtro {
  // Input - #1 - Definir el input
  nombre = input<string>('');
  estado = false;

  // Output - #1 - Definir el input. El tipo genérico entre llaves es el tipo de dato a enviar.
  avisarEncendido = output<any>();

  // Output - #2 - Definir el emit del evento, ¿Qué envia?
  cambiarEstado() {
    this.estado = !this.estado;

    // Input - #3 - Se pueden usar los valores del input en otros lados.
    this.avisarEncendido.emit({
      nombre: this.nombre(),
      estado: this.estado,
    });
  }
}
