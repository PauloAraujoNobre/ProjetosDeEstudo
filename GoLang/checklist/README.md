# Checklist

Uma aplicação desenvolvida em prol do aprendizado de diversas tecnologias, dentre elas priorizam-se Golang, Docker e Migrations

O Checklist é uma aplicação desenvolvida para armazenar uma lista de tarefas, onde você pode gerenciar tarefas

## Get Start
Com esse comando você poderá instalar as dependencias do projeto

`docker compose up --build`

Logo em seguida, você precisará executar o comando para inicializar as migrations do bando de dados

`migrate -path db/migrations -database "postgresql://postgres:123@localhost:5432/postgres?sslmode=disable" -verbose up`

Após instalar as dependências e as migrations, o projeto já está apto, para rodar o servidor basta utilizar o seguinte comando na pasta root do projeto

`go run .\cmd\api\main.go`

## Auxiliary Programs 
Para efetuar testes, recomendo a utilização de uma feramenta de testes como [Postman](https://www.postman.com/downloads/) ou [Insomnia](https://insomnia.rest/download)