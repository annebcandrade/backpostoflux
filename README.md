# Back-End da Aplicação FullStack: AutoPosto Flux.

## Tecnologias Utilizadas: 
Node, Express, UUID, Sequelize, Docker, Banco de Dados Postgres, Cors, Arquitetura de Sotware MVC. 

## Para executar a aplicação na sua IDE aplique os seguintes comandos: 
1- NPM I, 
2- docker-compose up --build 
3- Docker ps -a, 
4 - Docker Start FluxPostgres, 
5 - Npm i Cors, 
6 - Npm Run Dev. 

## Como funciona a Aplicação? Passo a Passo da Apliação: 
Quando recebi o desafio já vi que a aplicação back-end teria os métodos Get para exibir os registros do historico de cada motorista, 
e post para criar um novo registro. Então montei toda estrutura, com app.js / server.js / controllers e models (usei arquitetura MVC)
e claro, o banco de dados. Primeiro criei um conteiner Docker, depois criei o banco, as tabelas com as informações de cada usuário, 
utilizei a ORM sequilize para dizer ao back-end qual era o tipo de informação que eu queria (Sequelize.STRING) de cada informação. 
Depois ajustei as rotas, no Get, para otimizar o trabalho decidi que buscaria o histórico por cpf, por ser um valor que geralmente só 
o usuário sabe, então no Get ficou a rota /users/:cpf e o post ficou /users e devolvia o status 201 para cada usuário criado. 
Nas regras de negócio, informei que nenhum campo poderia ser nulo/zero, AllowNull: False. E quando conectei ao front, se qualquer campo na aplicação for nulo, Retorna um parágrafo: 
"Preencha todos os Campos". 

Repositório Front: https://github.com/annebcandrade/frontpostoflux
