import { Inject, Injectable } from '@nestjs/common';
import { Channel, ConsumeMessage } from 'amqplib';

@Injectable()
export class RabbitmqReceiver {

    constructor(
        @Inject('RABBITMQ_CHANNEL') private readonly channel: Channel
    ) {
        console.log(`메세지 수신 시작`);
        channel.consume('hello', (message: ConsumeMessage | null) => {
            if (message) {
                console.log(message.content.toString());
                channel.ack(message);
            }
        });
    }

}