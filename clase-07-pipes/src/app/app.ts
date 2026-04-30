import { Component } from '@angular/core';
import { TitleCasePipe, JsonPipe, DatePipe, UpperCasePipe, CurrencyPipe } from '@angular/common';
import { AcortadorPipe } from './pipes/acortador-pipe';
import { SegundosPipe } from './pipes/segundos-pipe';
import { FechaPipe } from './pipes/fecha-pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [
    TitleCasePipe,
    JsonPipe,
    DatePipe,
    UpperCasePipe,
    CurrencyPipe,
    AcortadorPipe,
    SegundosPipe,
    FechaPipe,
  ], // Importo todo
})
export class App {
  dni = 11234567;

  nombre0 = 'agustin'; //Agustin
  nombre1 = 'Agustin'; //Agustin
  nombre2 = 'AGUSTIN'; //Agustin
  nombre3 = 'agusTIN'; //Agustin

  objeto = { clave: 'valor', clave2: 'valor2' };

  // stringify = (obj: Object) => JSON.stringify(obj);

  fechaEnString = '2026-04-30';
  fechaLarga = '2026-04-30T19:00:00';
  fechaNumero = 99999900;
  fechaDate = new Date('2000-01-01');

  textoCorto = 'Hola';

  textoLargo = 'Hola mundo como están bien y vos';
}

// 128 -> "Dos minutos y 8 segundos" -> "02:08"
