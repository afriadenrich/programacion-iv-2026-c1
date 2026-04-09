import { Component } from '@angular/core';
import { Filtro } from '../../components/filtro/filtro';

@Component({
  selector: 'app-referencia',
  imports: [Filtro],
  templateUrl: './referencia.html',
  styleUrl: './referencia.css',
})
export class Referencia {
  // Input - #4 - Definir los datos de entrada.
  filtro1 = 'Órden';
  filtro2 = 'Precio';

  // Output - #4 - Definir la acción final a realizar. Los datos recibidos deben ser los mismos enviados por el output.
  encendido({ nombre, estado }: { nombre: string; estado: boolean }) {
    console.log(nombre, estado);
  }
}
