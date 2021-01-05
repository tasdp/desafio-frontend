# Desafio-Frontend


## Bem-vindo

A TASDP é uma Startup com foco em desenvolvimento de sistemas web por demanda para áreas de saúde e industrias.

## Como participar

* Crie um novo fork e branch com seu nome-sobrenome e faça um pull request quando estiver pronto. Iremos fazer code review.

## O desafio

Você deverá criar uma Agenda de Eventos e apresentar os dados contidos no arquivo events.json. Obs: você pode ser basear no Google Agenda (Mobile e Desktop)

Requisitos:

1. A agenda deverá mostrar uma visão semanal dos eventos e ao carregar deverá ser mostrada a semana atual
2. Deve ser possível avançar e retroceder datas
3. Eventos que ocorrem em um mesmo período devem ser apresentados de forma clara
4. Ao clicar em um evento deverá ser mostrado suas informações

Obs: levaremos em conta o layout na versão Mobile e Desktop

## Serviço Rest

Criar o backend não é o foco deste teste, portanto está sendo disponibilizado um serviço Rest que deve ser utilizado para recuperar a lista de produtos do projeto.

Para rodar o serviço, é necessário instalar o json-server:

`npm install -g json-server`

Após isso, rodar o comando: `json-server --watch rest-api/events.json`

Isso irá disponibilizar uma api REST rodando no endereço http://localhost:3000/events.

Um produto especifico pode ser acessado através da url http://localhost:3000/events/{id};

## Dicas

* Tudo bem, até pode usar jquery. Se você não quiser usar (bônus), uma sugestão: Axios para a comunicação com a API.
* HTML o mais semântico possível.
* Branches com readme e instruções de implantação serão bem vindos.
* Pré-processadores CSS como Stylus ou LESS também.
* Que tal utilizar BEM nos identificadores css? http://getbem.com/naming/ 