import { Entity, ObjectIdColumn, ObjectId, Column } from 'typeorm';

@Entity('contatos')// nome da tabela no banco de dados
export class Contato {
    @ObjectIdColumn()
    id: ObjectId;

    @Column()
    nome: string;

    @Column()
    telefone: string;
    
    @Column()
    email: string;
}