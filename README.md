# Desafio-Frontend

## O desafio

Criar uma Agenda de Eventos e apresentar os dados contidos no arquivo events.json.

## Requisitos:

1. [x] A agenda deverá mostrar uma visão semanal dos eventos e ao carregar deverá ser mostrada a semana atual
2. [x] Deve ser possível avançar e retroceder datas
3. [x] Eventos que ocorrem em um mesmo período devem ser apresentados de forma clara
4. [x] Ao clicar em um evento deverá ser mostrado suas informações

## Como executar:

Após clonar o repositório, é necessário instalar as dependências. A partir da pasta front-end do projeto, execute:

`npm install`

Após isso, para iniciar o json-server, execute o seguinte comando a partir da pasta raiz do projeto:

`json-server --watch rest-api/events.json`

Isso irá disponibilizar uma api REST rodando no endereço http://localhost:3000/events.

Em seguida, rodar o comando: `npm start` em outro terminal (Caso solicitado, digite 'y' para iniciar o app em outro endereço e evitar conflitos com o json-server).


## Recursos Utilizados

* FullCalendar como a base da agenda
* Axios para requisições à API REST

Obs: Para facilitar os testes, as datas dos eventos no arquivo .json foram acrescidas em 1 ano para serem mais facilmente encontradas partindo da data atual (janeiro/2021). 
