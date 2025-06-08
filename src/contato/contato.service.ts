import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { ObjectId } from 'mongodb';
import { Contato } from './contato.entity';

@Injectable()
export class ContatoService {
    constructor(
        @InjectRepository(Contato)
        private contatoRepository: MongoRepository<Contato>,
    ) {}
    
    async criar(contato: Partial<Contato>) {
        const novo = this.contatoRepository.create(contato);
        return this.contatoRepository.save(novo);
    }

    async listarTodos() {
        return this.contatoRepository.find();
    }

    async buscarPorId(id: string) {
        return this.contatoRepository.findOne({
            where: { _id: new ObjectId(id) }
        });
    }

    async deletar(id: string): Promise<void> {
        await this.contatoRepository.delete({ id: new ObjectId(id) });      
    }

    async atualizar(id: string, dados: Partial<Contato>) {
        const contato = await this.buscarPorId(id);
        if (!contato) {
            throw new NotFoundException('Contato não encontrado');
        }

        const atualizado = Object.assign(contato, dados);
        return this.contatoRepository.save(atualizado);
    }
}
