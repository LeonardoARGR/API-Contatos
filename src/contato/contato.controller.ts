import { Controller, Get } from '@nestjs/common';
import { ContatoService } from './contato.service';

@Controller('contato')
export class ContatoController {
    constructor(private readonly contatoService: ContatoService) {}
    @Get()
    findAll() {
        return this.contatoService.findAll();
    }
}
