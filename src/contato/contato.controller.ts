import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ContatoService } from './contato.service';
import {Contato} from './contato.entity';

@Controller('contato')
export class ContatoController {
    constructor(private readonly contatoService: ContatoService) {}
    
    @Post()
    criar(@Body() dados: Partial<Contato>) {
        return this.contatoService.criar(dados);
    }

    @Get()
    listar() {
        return this.contatoService.listarTodos();
    }


    @Get(':id')
    buscar(@Param('id') id:string) {
        return this.contatoService.buscarPorId(id);
    }

    @Put(':id')
    atualizar(@Param('id') id: string, @Body() dados: Partial<Contato>) {
        return this.contatoService.atualizar(id, dados);
    }

    @Delete(':id')
    remover(@Param('id') id: string) {
        return this.contatoService.deletar(id);
    }
}
