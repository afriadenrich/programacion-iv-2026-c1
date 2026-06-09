import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { io, Socket } from 'socket.io-client';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
})
export class App {
  mensajes = signal<string[]>([]);

  mensaje = '';

  client: Socket;

  // establecer la conexión
  constructor() {
    this.client = io('ws://localhost:3001');

    this.escucharRespuestas();
  }

  // socket.emit "enviarMensaje"
  enviarMensaje() {
    this.client.emit('enviarMensaje', this.mensaje);
  }

  // socket.listen?? respuestaDelServidor
  escucharRespuestas() {
    this.client.on('respuestaDelServidor', (msj) => {
      this.mensajes.update((anterior) => [...anterior, msj]);
    });
  }
}
