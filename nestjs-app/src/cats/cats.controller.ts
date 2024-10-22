import { Controller, Get, Query, Post, Body, Put, Param, Delete } from "@nestjs/common";
import { CreateCatDto } from './dto/create-cat.dto';

@Controller('cats')
export class CatsController {
    @Post()
    create(@Body() CreateCatDto: CreateCatDto) {
        return 'This acction adds a new cat'
    }

    @Get()
    async findAll(): Promise<any[]> {
        return [];
    }

    @Get(':id')
    findOne(@Param('id') id: string): string {
        return `This action returns a #${id} cat`
    }

}