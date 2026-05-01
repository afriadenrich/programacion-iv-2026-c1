import { Directive, ElementRef, inject, output } from '@angular/core';

@Directive({
  selector: '[appTimer]',
})
export class Timer {
  intervalo?: number;
  tiempo: number = 0;

  elemento = inject(ElementRef);

  iniciarContadorEvent = output<void>();
  obtenerTiempoFinalEvent = output<number>();

  constructor() {}

  iniciarContador() {
    clearInterval(this.intervalo);
    this.intervalo = undefined;
    this.tiempo = 0;

    this.intervalo = setInterval(() => {
      this.tiempo += 1;
      this.elemento.nativeElement.textContent = this.tiempo;
    }, 1000);
  }

  frenarContador() {
    clearInterval(this.intervalo);
    this.intervalo = undefined;
    return this.tiempo;
  }
}
