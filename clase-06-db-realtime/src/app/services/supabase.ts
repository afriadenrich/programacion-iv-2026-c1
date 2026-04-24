import { Injectable, signal } from '@angular/core';
import {
  createClient,
  PostgrestQueryBuilder,
  RealtimeChannel,
  SupabaseClient,
  User,
} from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root',
})
export class Supabase {
  supabaseUrl = 'https://gtjiarttecmosslkoewz.supabase.co';

  publishableKey = 'sb_publishable_jORN5gqNJWuFBsYyyOB9Aw_by_z7mZR';

  supabase: SupabaseClient<any, 'public', 'public', any, any>;
  usuarioActual = signal<User | null>(null);
  tablaMensajes: PostgrestQueryBuilder<any, any, any, 'mensajes', unknown>;
  canal: RealtimeChannel;

  constructor() {
    this.supabase = createClient(this.supabaseUrl, this.publishableKey);
    this.tablaMensajes = this.supabase.from('mensajes');

    // canal puede ser schema-db-changes o table-db-changes
    this.canal = this.supabase.channel('table-db-changes');

    // Cuando el canal detecte cambios en la tabla, escuchar el evento
    // const definicion = this.canal.on(
    //   'postgres_changes',
    //   {
    //     event: 'INSERT',
    //     schema: 'public',
    //     table: 'mensajes',
    //   },
    //   (data) => {
    //     console.log(data);
    //   },
    // );

    // const subscripcion = definicion.subscribe();
  }

  async enviarMensaje(usuario: string, contenido: string) {
    const { data } = await this.tablaMensajes.insert({ usuario, contenido });

    console.log(data);
  }

  async traerMensajesYaExistentes() {
    const { data } = await this.tablaMensajes.select('*').order('id', { ascending: true });

    return data;
  }

  // #region EJEMPLOS BÁSICOS DE CRUD

  async traer() {
    // eq -> equals
    // neq -> not equals
    // gt -> greater than -> mayor qué
    // lt -> menor qué
    // lte -> menor o igual qué
    // gte -> mayor o igual qué

    // SELECT * FROM "mensajes" WHERE id = 2
    const { data, error } = await this.supabase.from('mensajes').select('usuario, contenido');

    console.log(data, error);
  }

  async insertar() {
    const { data, error } = await this.supabase.from('mensajes').insert({
      contenido: 'Desde código',
      usuario: 'Pepito',
    });
  }

  async modificar() {
    // UPDATE mensajes SET usuario = "Un hacker" WHERE id = 5

    const { data, error, success, status, statusText, count } = await this.tablaMensajes
      .update({
        usuario: 'Un hacker',
      })
      .eq('id', 22);

    console.log(data, error, success, status, statusText, count);
  }

  async eliminar() {
    const { data, error, success, status, statusText, count } = await this.tablaMensajes
      .delete()
      .eq('id', 23);
    console.log(data, error, success, status, statusText, count);
  }

  // #endregion
}
