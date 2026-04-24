import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Supabase } from '../services/supabase';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat',
  imports: [FormsModule],
  templateUrl: './chat.html',
  styleUrl: './chat.css',
})
export class Chat implements OnInit {
  supabaseService = inject(Supabase);
  mensajes: WritableSignal<IMensaje[]> = signal([]);

  contenido: string = '';
  usuario: string = '';

  suscripcion = null;

  enviar() {
    console.log(this.contenido, this.usuario);
    this.supabaseService.enviarMensaje(this.usuario, this.contenido);
    this.contenido = '';
  }

  async ngOnInit(): Promise<void> {
    const data = (await this.supabaseService.traerMensajesYaExistentes()) as IMensaje[];

    this.mensajes.set(data);

    this.supabaseService.canal
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'mensajes',
        },
        (data) => {
          console.log(data);
          // const mensajesNew = this.mensajes();

          // mensajesNew.push(data.new as IMensaje);

          // this.mensajes.set(mensajesNew);

          // const mensajesNew = [...this.mensajes()];
          // mensajesNew.push(data.new as IMensaje);

          // this.mensajes.set(mensajesNew);

          // Recordar que el spread operator (...) devuelve lo que se le mande, separado en sus partes.

          this.mensajes.update((valorAnterior) => {
            return [...valorAnterior, data.new as IMensaje];
          });

          // this.mensajes.update((valor) => {
          //   valor.push(data.new as IMensaje);
          //   return valor.slice();
          // });
        },
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.supabaseService.canal.unsubscribe();
  }
}

interface IMensaje {
  usuario: string;
  contenido: string;
  id: number;
  creado_en: Date;
}
