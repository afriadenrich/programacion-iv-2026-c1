import { Component } from '@angular/core';
import { Filtro } from '../../components/filtro/filtro';

@Component({
  selector: 'app-referencia',
  imports: [Filtro],
  templateUrl: './referencia.html',
  styleUrl: './referencia.css',
})
export class Referencia {
  encendido({ nombre, estado }: any) {
    console.log(nombre, estado);
  }
}
