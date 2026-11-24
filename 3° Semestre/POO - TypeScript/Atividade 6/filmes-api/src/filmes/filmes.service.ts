import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Filme } from './filme.entity';
import { Repository } from 'typeorm';
import { CriarFilmeDto } from './dto/criar-filme.dto';

@Injectable()
export class FilmesService {
    constructor(
        @InjectRepository(Filme)
        private readonly filmesRepositorio: Repository<Filme>,
    ) {}

    async listar(): Promise<Filme[]> {
        return await this.filmesRepositorio.find();
    }

    async buscarPorId(id: number): Promise<Filme> {
        const idx = await this.filmesRepositorio.findOneBy({ id: id });

        if(idx === null) {
            throw new NotFoundException(`O filme de Id informado não existe.`);
        }

        return idx;
    }

    async criar(dados: CriarFilmeDto): Promise<Filme> {
        const filme: Filme = this.filmesRepositorio.create(dados);
        return await this.filmesRepositorio.save(filme);
    }
}
