# Checklist

Uma aplicação desenvolvida em prol do aprendizado de diversas tecnologias, dentre elas priorizam-se Golang, Docker e Migrations

O Checklist é uma aplicação desenvolvida para armazenar uma lista de tarefas, onde você pode gerenciar tarefas

## Pré-requisito
Golang 1.17
Docker

## Começo
Com esse comando você poderá instalar as dependencias do projeto

`go mod download`

O seguinte comando serve para inicializar as migrations do bando de dados

`migrate -path db/migrations -database "postgresql://postgres:123@localhost:5432/postgres?sslmode=disable" -verbose up`

Após instalar as dependências e as migrations, o projeto já está apto, para rodar o servidor basta utilizar o seguinte comando na pasta root do projeto

`go run .\cmd\api\main.go`

## Programas Auxiliares
Para recomendação de IDE, sugiro a utilização do [VSCode](https://code.visualstudio.com)

Para efetuar testes, recomendo a utilização de uma REST Client como [Postman](https://www.postman.com/downloads/) ou [Insomnia](https://insomnia.rest/download)

## Tecnologias
- [Go](https://golang.org)
- [go-chi](https://github.com/go-chi/chi)
- [golang-migrate](https://github.com/golang-migrate/migrate)
- [godotenv](https://pkg.go.dev/github.com/joho/godotenv)
- [pgx](https://github.com/jackc/pgx)

## Diagrama do Projeto

Digrama de requisições:

![alt text][Diagram]

[Diagram]: https://github.com/PauloAraujoNobre/ProjetosDeEstudo/blob/master/GoLang/checklist/Diagram/Imgs/Requests.png "Diagrama de requisições"

Detalhamento do digrama de requisições:

![alt text][DiagramDetails]

[DiagramDetails]: https://github.com/PauloAraujoNobre/ProjetosDeEstudo/blob/master/GoLang/checklist/Diagram/Imgs/RequestDetails.png "Detalhes do diagrama de requisições"
