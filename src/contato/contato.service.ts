import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { Contato } from './contato.entity';

@Injectable()
export class ContatoService {
    constructor(
        @InjectRepository(Contato)
        private contatoRepository: MongoRepository<Contato>,
    ) {}
    
    findAll(): Promise<Contato[]> {
        return this.contatoRepository.find();
    }
}
