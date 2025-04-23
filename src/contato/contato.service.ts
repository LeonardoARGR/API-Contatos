import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Contato } from './contato.entity';

@Injectable()
export class ContatoService {
    constructor(
        @InjectRepository(Contato)
        private contatoRepository: Repository<Contato>,
    ) {}
    findAll(): Promise<Contato[]> {
        return this.contatoRepository.find();
    }
}
