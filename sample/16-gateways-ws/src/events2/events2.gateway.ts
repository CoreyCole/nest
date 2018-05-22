import {
  WebSocketGateway,
  SubscribeMessage,
  WsResponse,
  WebSocketServer,
  WsException,
} from '@nestjs/websockets';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

@WebSocketGateway(8081)
export class Events2Gateway {
  @WebSocketServer() server;

  @SubscribeMessage('events')
  onEvent(client, data): Observable<WsResponse<number>> {
    const event = 'events';
    const response = [1, 2, 3];

    return from(response).pipe(map(res => ({ event, data: res })));
  }
}
