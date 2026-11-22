import { Injectable, NotFoundException } from '@nestjs/common';
import { Tarefa } from './tarefas.interface';

@Injectable()
export class TarefasService {
    private tarefas: Tarefa[] = [];
    private proximoId = 1;

    listar(): Tarefa[] {
        return this.tarefas;
    }

    buscarPorId(id: number): Tarefa {
        const tarefa = this.tarefas.find(t => t.id === id);
        
        if(!tarefa) {
            throw new NotFoundException(`Tarefa com id ${id} não existe.`);
        }

        return tarefa;
    }

    criar(titulo: string): Tarefa {
        const novaTarefa: Tarefa = {
            id: this.proximoId,
            titulo: titulo,
            concluida: false,
        };

        this.proximoId++;
        this.tarefas.push(novaTarefa);

        return novaTarefa;
    }

    concluir(id: number): Tarefa {
        const tarefa = this.buscarPorId(id);
        tarefa.concluida = true;
        return tarefa;
    }
}
