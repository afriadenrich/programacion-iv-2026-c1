import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Http } from './services/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected http = inject(Http);

  apiUrl = 'https://api.github.com/users/';
  user = 'afriadenrich';

  usuarioRecibido = signal<any>(null);

  ngOnInit() {
    this.http.traer(this.apiUrl, this.user, this.usuarioRecibido);
  }
}
