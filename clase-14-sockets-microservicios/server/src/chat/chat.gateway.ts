import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';

import { Server, Socket } from 'socket.io';

@WebSocketGateway(3001, {
  cors: {
    origin: '*',
  },
})
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  handleConnection(/* client: Socket*/) {
    console.log('Se conectó un cliente' /*, client*/);
  }

  handleDisconnect(/* client: Socket*/) {
    console.log('Se desconectó un cliente' /*, client*/);
  }

  @WebSocketServer()
  server: Server; // me da la información de todos los conectados + la capacidad de mandar mensaje a TODOS

  // Escuchar mensajes que mande el cliente
  @SubscribeMessage('enviarMensaje')
  onMensajeEnviado(
    @MessageBody() mensaje: string,
    @ConnectedSocket() cliente: Socket,
  ) {
    console.log('Mensaje enviado', mensaje, cliente.id);

    // SOLO AL CLIENTE QUE ENVIÓ EL MENSAJE
    // cliente.emit('respuestaDelServidor', 'te respondo');

    // ESTE LE RESPONDE A TODOS
    // server.clients = []
    // this.server.to('1').emit('respuestaDelServidor', mensaje);
    this.server.emit('respuestaDelServidor', mensaje);
  }

  @SubscribeMessage('conectarseAUnaRoom')
  async onConectarseAUnaRoom(
    @MessageBody() mensaje: string,
    @ConnectedSocket() cliente: Socket,
  ) {
    await cliente.join(mensaje);
  }
}
