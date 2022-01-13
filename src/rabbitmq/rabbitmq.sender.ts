import { Inject, Injectable } from '@nestjs/common';
import { Channel } from 'amqplib';

@Injectable()
export class RabbitmqSender {

    constructor(
        @Inject('RABBITMQ_CHANNEL') private readonly channel: Channel
    ) {

    }

    public send(message: any) {
        this.channel.sendToQueue('hello', Buffer.from(message));
        console.log('메세지 전송');
    }

}