import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { FilmesService } from './filmes.service';
import { Filme } from './filme.entity';
import { CriarFilmeDto } from './dto/criar-filme.dto';

@Controller('filmes')
export class FilmesController {
    constructor(private readonly filmesService: FilmesService) {}

    @Get()
    async listar(): Promise<Filme[]> {
        return await this.filmesService.listar();
    }

    @Get(':id')
    async buscarPorId(@Param('id', ParseIntPipe) id: number): Promise<Filme> {
        return await this.filmesService.buscarPorId(id);
    }

    @Post()
    async criar(@Body() body: CriarFilmeDto): Promise<Filme> {
        return await this.filmesService.criar(body);
    }
}
