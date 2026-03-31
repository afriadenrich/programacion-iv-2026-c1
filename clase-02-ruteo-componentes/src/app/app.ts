import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

// El componente APP formado por app.html, app.css y app.ts
// APP es una excepción. Es un componente GLOBAL. TODO se renderiza dentro de app.
// Los componentes pueden ser PÁGINAS o COMPONENTES

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('clase-02-ruteo-componentes');
}
