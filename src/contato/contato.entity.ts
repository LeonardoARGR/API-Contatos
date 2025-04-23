import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('contatos')// nome da tabela no banco de dados
export class Contato {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    nome: string;
    @Column()
    telefone: string;
    @Column()
    email: string;
}