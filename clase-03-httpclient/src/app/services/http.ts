import { HttpClient } from '@angular/common/http';
import { inject, Injectable, Signal, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Http {
  httpClient = inject(HttpClient);

  traer(apiUrl: string, user: string, signal: WritableSignal<any>) {
    const peticion = this.httpClient.get(apiUrl + user);

    peticion.subscribe((data) => {
      if (data) {
        signal.set(data);
      }
    });
  }
}
