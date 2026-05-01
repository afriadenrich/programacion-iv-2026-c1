import { Directive, ElementRef, HostListener, inject, input } from '@angular/core';

// Directiva de ATRIBUTO <div ATRIBUTO=""></div>

@Directive({
  selector: '[appResaltar]',
  // Cómo accedo a eventos?
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()',
  },
})
export class Resaltar {
  // Cómo accedo a el DOM? (extrapolable a componentes)
  private elemento = inject(ElementRef);

  color = input('#f00');
  appResaltar = input('saludo');

  constructor() {
    console.log(this.appResaltar());
  }

  ngOnInit() {
    console.log(this.appResaltar());
  }

  // Cómo accedo a eventos?
  onMouseEnter() {
    this.elemento.nativeElement.style.backgroundColor = this.color();
  }

  onMouseLeave() {
    this.elemento.nativeElement.style.backgroundColor = '#FFF';
  }

  // Cómo accedo a estilos?
}

// .clase:hover { back... }
