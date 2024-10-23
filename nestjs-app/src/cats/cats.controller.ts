import { Controller, Get, Query, Post, Body, Put, Param, Delete } from "@nestjs/common";
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cats.interface'

@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService) {}

    @Post()
    async create(@Body() createCat: CreateCatDto) {
        this.catsService.create(createCat);
    }

    @Get()
    async findAll(): Promise<any[]> {
        return this.catsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): string {
        return `This action returns a #${id} cat`
    }

}