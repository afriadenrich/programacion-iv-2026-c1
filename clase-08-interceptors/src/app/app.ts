import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  API_URL = 'https://api.nasa.gov/planetary/apod';

  http = inject(HttpClient);

  fecha: string = '2026-05-07';

  resultado = signal<string>('');
  texto = signal<string>('');
  async buscar() {
    const peticion = this.http.get(this.API_URL, {
      params: {
        date: this.fecha,
      },
    });

    peticion.subscribe((data: any) => {
      this.resultado.set(data.url);
      this.texto.set(data.title);
    });
  }
}
