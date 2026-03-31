import { Component, OnInit, OnDestroy } from '@angular/core';
import { Card } from '../../components/card/card';

@Component({
  selector: 'app-home',
  imports: [Card],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnDestroy, OnInit {
  valor = 55;

  constructor() {}

  ngOnInit() {
    console.log(
      'Se ejecuta ON INIT https://angular.dev/guide/components/lifecycle#ngoninit',
      this.valor,
    );
  }

  ngOnDestroy() {
    console.log('Se destruye HOME');
  }
}
