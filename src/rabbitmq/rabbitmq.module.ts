import { Module } from '@nestjs/common';
import { RabbitmqService } from './rabbitmq.service';
import { RabbitmqController } from './rabbitmq.controller';
import  { connect, Channel, Connection } from 'amqplib';
import { RabbitmqReceiver } from './rabbitmq.receiver';
import { RabbitmqSender } from './rabbitmq.sender';

@Module({
  controllers: [RabbitmqController],
  providers: [
      RabbitmqService,
    {
      provide: 'RABBITMQ_CHANNEL',
      useFactory: async () => {
        const connection = await connect('amqp://localhost')
        const channel: Channel = await connection.createChannel();
        await channel.assertQueue('hello', { durable: false });
        return channel;
      }
    },
      RabbitmqReceiver,
      RabbitmqSender
  ]
})
export class RabbitmqModule {}
