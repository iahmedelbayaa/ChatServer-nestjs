import { WebSocketGateway, SubscribeMessage, ConnectedSocket } from '@nestjs/websockets';
import { ChatService } from './chat.service';
import { UserEntity } from 'src/users/entities/user.entity';
import { Chat } from './entities/chat.entity';

@WebSocketGateway({ port: 1080, namespace: 'messages' })
export class ChatGateway {

    constructor(private chatService: ChatService) {}

    @SubscribeMessage('data')
    handleGetAddMessage(@ConnectedSocket() sender: any, message: Chat) {
        this.chatService.storeMessage(message);
        sender.emit('newMessage', message);
        sender.broadcast.emit('newMessage', message);
    }

    @SubscribeMessage('isWriting')
    handleIsWriting(@ConnectedSocket() sender: any, user: UserEntity) {
        sender.broadcast.emit('isWriting', user);
    }

    @SubscribeMessage('isNotWriting')
    handleIsNotWriting(@ConnectedSocket() sender: any) {
        sender.broadcast.emit('isNotWriting');
    }
}
