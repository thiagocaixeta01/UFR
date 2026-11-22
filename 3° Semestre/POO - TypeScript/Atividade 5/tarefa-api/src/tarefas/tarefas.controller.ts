import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { TarefasService } from './tarefas.service';
import type { Tarefa } from './tarefas.interface';
import { CriarTarefaDto } from './dto/criar-tarefa.dto';

@Controller('tarefas')
export class TarefasController {
    constructor(private readonly tarefasService: TarefasService) {}

    @Get()
    listar(): Tarefa[] {
        return this.tarefasService.listar();
    }

    @Get(':id')
    buscarPorId(@Param('id', ParseIntPipe) id: number): Tarefa {
        return this.tarefasService.buscarPorId(id);
    }

    @Post()
    criar(@Body() body: CriarTarefaDto): Tarefa {
        return this.tarefasService.criar(body.titulo);
    }

    @Patch(':id/concluir')
    concluir(@Param('id', ParseIntPipe) id: number): Tarefa {
        return this.tarefasService.concluir(id);
    }
}
