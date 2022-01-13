import { Inject, Injectable } from '@nestjs/common';
import { CreateRabbitmqDto } from './dto/create-rabbitmq.dto';
import { UpdateRabbitmqDto } from './dto/update-rabbitmq.dto';
import { RabbitmqSender } from './rabbitmq.sender';

@Injectable()
export class RabbitmqService {


    constructor(
        @Inject(RabbitmqSender) private readonly rabbitmqSender: RabbitmqSender
    ) {
    }

    create(createRabbitmqDto: CreateRabbitmqDto) {
        return 'This action adds a new rabbitmq';
    }

    async findAll() {
        await this.rabbitmqSender.send(`Hello World`);
        return `This action returns all rabbitmq`;
    }

    findOne(id: number) {
        return `This action returns a #${id} rabbitmq`;
    }

    update(id: number, updateRabbitmqDto: UpdateRabbitmqDto) {
        return `This action updates a #${id} rabbitmq`;
    }

    remove(id: number) {
        return `This action removes a #${id} rabbitmq`;
    }

}
