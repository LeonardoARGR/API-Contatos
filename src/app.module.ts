import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contato } from './contato/contato.entity';
import { ContatoModule } from './contato/contato.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '', // ou '123', dependendo do seu XAMPP
      database: 'banco_contatos',
      entities: [Contato],
      synchronize: true, // em produção, mude para false
    }),
    ContatoModule,
  ],
})
export class AppModule {}