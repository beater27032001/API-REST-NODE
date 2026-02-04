# API REST - Sistema de Transações

## 📋 Descrição

Esta é uma API REST desenvolvida em Node.js com TypeScript que gerencia transações financeiras. O sistema permite criar, listar e consultar transações com controle de sessão através de cookies.

## 🚀 Funcionalidades

- **CRUD de Transações**: Criar, listar e consultar transações financeiras
- **Sistema de Sessão**: Controle de acesso através de cookies com session_id
- **Validação de Dados**: Uso do Zod para validação de entrada
- **Banco de Dados**: Suporte para PostgreSQL e SQLite
- **Migrations**: Sistema de migrações para controle de schema
- **TypeScript**: Desenvolvido com TypeScript para maior segurança de tipos

## 🛠️ Tecnologias Utilizadas

- **Node.js** (>=18.0.0)
- **TypeScript**
- **Fastify** (Framework web)
- **Knex.js** (Query builder)
- **Zod** (Validação de schemas)
- **PostgreSQL/SQLite** (Banco de dados)
- **Vitest** (Testes)

## 📋 Pré-requisitos

- Node.js versão 18.0.0 ou superior
- npm ou yarn
- PostgreSQL (opcional, pode usar SQLite)

## 🔧 Instalação

1. **Clone o repositório:**

```bash
git clone <url-do-repositorio>
cd API-REST-NODE
```

2. **Instale as dependências:**

```bash
npm install
```

3. **Configure as variáveis de ambiente:**
   Crie um arquivo `.env` na raiz do projeto:

```env
NODE_ENV=development
DATABASE_URL=./dev.db
DATABASE_CLIENT=sqlite
PORT=3333
```

Para PostgreSQL:

```env
NODE_ENV=development
DATABASE_URL=postgresql://usuario:senha@localhost:5432/nome_do_banco
DATABASE_CLIENT=pg
PORT=3333
```

4. **Execute as migrações:**

```bash
npm run knex migrate:latest
```

## 🚀 Como Executar

### Desenvolvimento

```bash
npm run dev
```

### Build para produção

```bash
npm run build
```

### Executar testes

```bash
npm test
```

### Executar linting

```bash
npm run lint
```

## 📊 Estrutura do Banco de Dados

### Tabela: transactions

- `id` (UUID): Identificador único da transação
- `title` (TEXT): Título/descrição da transação
- `amount` (DECIMAL): Valor da transação (positivo para crédito, negativo para débito)
- `session_id` (UUID): Identificador da sessão do usuário
- `created_at` (TIMESTAMP): Data de criação da transação

## 🔌 Endpoints da API

### Base URL: `http://localhost:3333/transactions`

#### POST `/transactions`

Cria uma nova transação

```json
{
  "title": "Salário",
  "amount": 5000,
  "type": "credit"
}
```

#### GET `/transactions`

Lista todas as transações da sessão atual (requer session_id no cookie)

#### GET `/transactions/:id`

Busca uma transação específica por ID (requer session_id no cookie)

#### GET `/transactions/summary`

Retorna o resumo das transações da sessão atual (requer session_id no cookie)

## 🔐 Sistema de Autenticação

O sistema utiliza cookies para gerenciar sessões:

- Ao criar a primeira transação, um `session_id` é gerado automaticamente
- O cookie tem duração de 7 dias
- Todas as operações de leitura requerem um `session_id` válido

## 📁 Estrutura do Projeto

```
API-REST-NODE/
├── db/
│   └── migrations/          # Migrações do banco
├── src/
│   ├── @types/             # Definições de tipos
│   ├── env/                # Configuração de variáveis de ambiente
│   ├── middlewares/        # Middlewares da aplicação
│   ├── routes/             # Rotas da API
│   ├── app.ts              # Configuração do Fastify
│   ├── database.ts         # Configuração do Knex
│   └── server.ts           # Servidor HTTP
├── knexfile.ts             # Configuração do Knex
├── package.json            # Dependências e scripts
└── tsconfig.json           # Configuração do TypeScript
```

## 🧪 Testes

O projeto utiliza Vitest para testes. Para executar:

```bash
npm test
```

## 📝 Scripts Disponíveis

- `npm run dev`: Executa em modo desenvolvimento com hot reload
- `npm run build`: Compila o projeto para produção
- `npm run test`: Executa os testes
- `npm run lint`: Executa o linter ESLint
- `npm run knex`: Executa comandos do Knex CLI

## 🌐 Porta Padrão

A API roda na porta **3333** por padrão, mas pode ser configurada através da variável de ambiente `PORT`.

## 🔧 Comandos do Knex

```bash
# Executar migrações
npm run knex migrate:latest

# Reverter última migração
npm run knex migrate:rollback

# Criar nova migração
npm run knex migrate:make nome_da_migracao

# Executar seeds (se existirem)
npm run knex seed:run
```

## 📄 Licença

ISC

## 👨‍💻 Autor

José Carlos Paiva

---

Para mais informações ou dúvidas, consulte a documentação das tecnologias utilizadas ou abra uma issue no repositório.
