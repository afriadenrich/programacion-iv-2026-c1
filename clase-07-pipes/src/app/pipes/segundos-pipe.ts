import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'segundos',
})
export class SegundosPipe implements PipeTransform {
  transform(value: number, agregarS: boolean = false): string {
    // 120 -> 02:00
    // 630 -> 10:30

    console.log(value);
    const minutos = Math.floor(value / 60);
    const segundos = value - minutos * 60;

    const segundosStr = segundos < 10 ? '0' + segundos : segundos;
    const minutosStr = minutos < 10 ? '0' + minutos : minutos;

    return `${minutosStr}:${segundosStr}${agregarS ? 's' : ''}`;
  }
}
