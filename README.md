# API TESTE TÉCNICO

Esta API, desenvolvida como parte de um teste técnico para a Reverbs, oferece funcionalidades baseadas em autenticação JWT para gerenciar usuários e dados de forma segura. Construída com o framework Nest.js, ela demonstra práticas modernas de desenvolvimento backend, sendo ideal para aplicações que requerem autenticação robusta e organização modular.

## Recursos Disponíveis

- Criar usuário.
- Listar usuários: Obtenha o perfil do usuário de forma rápida.
- Autenticação.

## Tecnologias usadas

**Linguagem:** Typescript

**ORM:** Prisma

**Container:** Docker

**Framework:** Nest.js

**Database:** PostgreSQL

## Instalação e Configuração

**Pré requisitos**

Antes de começar, certifique-se de ter instalado:

- Node.js (versão 20 ou superior)
- Typescript (versão 5.7.2 ou superior)
- PostgreSQL (ou outro banco de dados compatível)
- Docker (versão 27.3.1 ou superior)
- npm ou yarn

Faça o donwload do repositório através do github usando o comando:

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Após entrar na pasta será necessário configurar variáveis de ambiente, para isso crie na raíz do projeto o arquivo `.env`
será necessário setar as seguintes variáveis:

esse projeto será necessário configurar variáveis de ambiente:

```bash
  DATABASE_URL="postgresql://postgres:OUaMOpwWJxNveDRIWaVbBkquskpikbZt@junction.proxy.rlwy.net:41177/railway?connect_timeout=60&pool_timeout=30"
```

Caso use outra url será necessário adicionar o `connect_timeout=60&pool_timeout=3` ao final da url.

## Rodar Localmente

Para iniciar o projeto use:

Instalar dependências

```bash
  npm install
```

Iniciar o servidor

```bash
  npm run dev
```

O servidor ficará disponível na url `http://localhost:8080` lembrando que a porta a api tem o prefixo `/api` logo par acessar os endpois será necessário usar no seguinte formato: `http://localhost:8080/api`

## Endpoints

#### POST livros

```http
  POST /api/books
```

| Campo           | Type     | Obrigatório | Description                  |
| :-------------- | :------- | :---------- | :--------------------------- |
| `title`         | `string` | SIM         | O título do livro            |
| `author`        | `string` | SIM         | O autor do livro             |
| `publishedYear` | `number` | SIM         | O ano de publicação do livro |

Exemplo de corpo:

```json
{
  "title": "O Senhor dos Anéis",
  "author": "J.R.R. Tolkien",
  "publishedYear": 1954
}
```

Exemplo de requisição:

```js
const response = await fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(bookData),
});
```

#### GET livros

```http
  GET /api/books
```

O endpoint do tipo get ele funciona de 2 formas, a primeira é a requisição get sem query onde irá retornar uma lista com todos os livros registrados, a segunda é o uso da query `title` onde irá retornar o título específico solicitado; `/api/books?title=SEU_TITULO_AQUI`

| Query   | Type     | Obrigatório | Description       |
| :------ | :------- | :---------- | :---------------- |
| `title` | `string` | NÃO         | O título do livro |

Exemplo de requisição:

```js
const response = await fetch(url, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
});
```

## Running Tests

Esta api para seguir boas práticas de programação foi usado o JEST para testes;

Para iniciar os testes é necessário executar o comando:

```bash
  npm run test
```
