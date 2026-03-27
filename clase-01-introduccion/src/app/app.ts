import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

// DECORADOR
@Component({
  templateUrl: './app.html',
  styleUrl: './app.css',
  selector: 'app-root', // <app-root></app-root>
  imports: [FormsModule], // Forms Module contiene NGMODEL
})
export class App {
  // protected readonly title = signal('HOLA CLASE');
  title: string = 'HOLA CLASE';
  // color: any = 'color-verde'; PUEDE SER CUALQUIER COSA
  color: string = 'color-verde tamanio-grande';
  naranja: boolean = true;
  tamanio: string | number = '30';

  texto = 'Hola clase';

  cambiarTamanio() {
    this.tamanio = 50;
  }

  cambiarColor(evento: KeyboardEvent) {
    console.log('Evento ejecutado', evento);
    if (evento.key === 'W') {
      this.color = 'color-rojo';
    }
  }

  cambiarTexto() {
    this.texto = 'Texto cambiado';
  }
}

// HTML
// CSS
// JS -> TS
