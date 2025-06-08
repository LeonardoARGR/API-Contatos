# API Contatos - NestJS + MongoDB + TypeORM

## Descrição  
API simples para gerenciamento de contatos usando NestJS, MongoDB e TypeORM. Permite criar, listar, buscar, atualizar e deletar contatos.

---

## Pré-requisitos  
- Node.js (v16+ recomendado)  
- npm ou yarn  
- MongoDB rodando localmente (padrão em mongodb://localhost:27017)  
- MongoDB Compass (opcional, para visualização do banco)

---

## Configuração  

1. Clone o repositório  
git clone https://github.com/seuusuario/seuprojeto.git  
cd seuprojeto  

2. Instale as dependências  
npm install  
# ou  
yarn install  

3. Configure o MongoDB  
- Garanta que o MongoDB está rodando na porta padrão 27017.  
- Caso queira usar outra porta ou host, ajuste o arquivo src/app.module.ts na configuração do TypeORM:  
TypeOrmModule.forRoot({  
  type: 'mongodb',  
  host: 'localhost',  
  port: 27017,  
  database: 'bancoContatos',  
  entities: [Contato],  
  synchronize: true,  
})

4. Execute a aplicação  
npm run start  
# ou  
yarn start  

A aplicação rodará por padrão em http://localhost:3000.

---

## Endpoints disponíveis  

| Método | Rota           | Descrição               |  
|--------|----------------|-------------------------|  
| POST   | /contato       | Criar novo contato      |  
| GET    | /contato       | Listar todos os contatos|  
| GET    | /contato/:id   | Buscar contato por ID   |  
| PUT    | /contato/:id   | Atualizar contato por ID|  
| DELETE | /contato/:id   | Deletar contato por ID  |

---

## Exemplo de JSON para criar/atualizar contato  

{  
  "nome": "João Silva",  
  "telefone": "5511999999999",  
  "email": "joao.silva@email.com"  
}

---

## Observações  

- O campo id é gerado automaticamente pelo MongoDB (_id), no formato padrão do Mongo (ObjectId).  
- Evite inserir manualmente o campo id para não causar inconsistências.  
- A opção synchronize: true no TypeORM está ativada para facilitar o desenvolvimento. Em produção, recomenda-se desativar para evitar perda de dados.

---

## Suporte  

Qualquer dúvida ou problema, abra uma issue no repositório ou contate o mantenedor.
