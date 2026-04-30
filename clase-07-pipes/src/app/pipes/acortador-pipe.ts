import { Pipe, PipeTransform } from '@angular/core';

/**
 * Quiero que si un string es muy largo, lo corte y agregue "..." al final
 * Ejemplo entrada: "Este ejemplo es muy largo".
 * Ejemplo salida: "Este ejemplo es...".
 */
// transform(value: string, ...args: unknown[]): string {
@Pipe({
  name: 'acortador', // selector
})
export class AcortadorPipe implements PipeTransform {
  // Método que ejecuta el pipe
  transform(value: string, largo: number = 12, caracteres: string = '...'): string {
    // Mi lógica de transformación
    if (value.length > largo) {
      return value.slice(0, largo).concat(caracteres);
    } else {
      return value;
    }

    // return value.length > 12 ? value.slice(0, 12).concat('...') : value
  }
}

/**
 * {{ variable | pipe }}
 * {{ variable | new Pipe().transform(variable) }}
 */
