import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contato } from './contato/contato.entity';
import { ContatoModule } from './contato/contato.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      port: 27017,
      database: 'bancoContatos',
      entities: [Contato],
      synchronize: true, // em produção, mude para false
    }),
    ContatoModule,
  ],
})
export class AppModule {}