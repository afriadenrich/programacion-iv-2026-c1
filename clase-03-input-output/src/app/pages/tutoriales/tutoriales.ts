import { Component } from '@angular/core';
import { Card } from '../../components/card/card';

@Component({
  selector: 'app-tutoriales',
  imports: [Card],
  templateUrl: './tutoriales.html',
  styleUrl: './tutoriales.css',
})
export class Tutoriales {
  cards: Array<ICard> = [
    {
      tituloOriginal: 'Aprende Angular en tu navegador.',
      subtituloOriginal: 'a través del patio de juegos',
      imagenOriginal: 'img/tren4.jpg',
      textoLinkOriginal: 'Compienza a programar',
      linkOriginal: '',
    },
    {
      tituloOriginal: 'Señales de aprendizaje2',
      subtituloOriginal: 'a través del patio de juegos',
      imagenOriginal: 'img/tren2.jpg',
      textoLinkOriginal: 'Compienza a programar',
      linkOriginal: '',
    },
  ];

  ultimaCard = '';

  meAvisaronQueClickearonUnaCard(card: any) {
    this.ultimaCard = card.titulo;
    console.log(card);
  }
}

// esto debería estar en otro archivo app/interfaces/ICard.ts o app/components/card/ICard.ts, etc.
interface ICard {
  imagenOriginal: string;
  tituloOriginal: string;
  subtituloOriginal: string;
  linkOriginal: string;
  textoLinkOriginal: string;
}
