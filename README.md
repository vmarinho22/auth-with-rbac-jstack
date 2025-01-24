# Auth + RBAC JStack

Um projeto feito em uma das aulas do curso JStack, onde o objetivo é criar um sistema de autorização + autenticação RBAC usando o Node JS, utilizando todos os padrões recomendados para um projeto limpo, escalável e saudável.

Nesse projeto, iniciamos um pouco da arquitetura limpa (com algumas adaptações), usando use cases, factories, adapters e muitos outros pontos para um projeto escalável.

## Como rodar localmente (dev)
Primeiramente, você deve ter o yarn instalado e uma instância do Postgres rodando (local ou Docker).

1. Com o yarn, rode o comando de instalação de dependências:

```sh
yarn
```

2. Então pode preencher as variáveis de ambiente que o projeto necessita (criando um `.env` na raiz do projeto):


```
DATABASE_URL=<string> # string de conexão com o Postgres
JWT_SECRET=<string>
PASSWORD_SALT=<number>
```

3. Então, rode o comando do prisma de migração do banco de dados
```sh
yarn prisma migrate dev
```

4. Em seguida, basta iniciar o servidor com o comando:
```sh
yarn dev
```

Pronto, seu servidor deve estar no ar!

## Endpoints

| Método | Endpoint | Descrição | Retorno |
|--------|----------|-----------|---------|
| POST   | /sign-up | Cria uma nova conta | void |
| POST   | /sign-in | Autentica um usuário e retorna um token de acesso | accessToken |
| GET    | /leads   | Lista os leads (requer autenticação) | accountId, leads |


