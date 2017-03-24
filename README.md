# Suporte ao Usuário Taller - API

## Instruções de Instalação

Ao clonar o repositório em seu computador e, antes de tentar rodar a API localmente, lembre de ter instalado globalmente os seguintes pacotes:  

* Node.js;  
* Express.js;  
* MongoDB;  
* Nodemon.

Tendo os pacotes supracitados instalados globalmente em seu computador, navegue pelo terminal até a pasta do projeto `./help-desk-api` e execute o seguinte comando no terminal: `npm install`. Isso fará com que seja instalado todas as dependências necessárias para que o projeto funcione normalmente sem erros.  

Para executar o projeto, antes de mais nada, você precisa se certificar que o serviço `mongod` está em execução e aguardando por novas conexões. Pois como trabalhamos com o MongoDB como banco NoSQL em nosso projeto, se faz necessário tê-lo em execução para que o projeto funcione normalmente.

Feito isso, para executar o projeto temos duas opções, podendo optar por qualquer uma delas, sendo: `nodemon app.js` OU `npm run dev`. Tais comandos devem ser executado no terminal, dentro do diretório do projeto, `./help-desk-api`.

Para testar a API, basta acessá-la via Postman, com o seguinte endereço: http://localhost:8282/api/tickets/.


## Documentação

### Tecnologias utilizadas

* Node.js;  
* Express.js;  
* MongoDB;  
* Mongoose;


## Rotas

### Tickets

`/api/tickets/`: **GET**, mostra todos os tickets cadastrados;  
`/api/tickets/`: **POST**, realiza o cadastro de um novo ticket;  
`/api/tickets/:ticket_id`: **GET**, mostra um ticket em específico;  
`/api/tickets/:ticket_id`: **PUT**, atualiza informações de um ticket específico;  
`/api/tickets/:ticket_id`: **DELETE**, deleta um ticket específico;  


#### Modelos

##### GET - `/api/tickets/`

* Link: http://localhost:8282/api/tickets/  
* Devolução:

```js  
{
  "statusCode": 200,
  "data": [],
  "error": false,
  "status": "OK"
}
```


##### POST - `/api/tickets/`

* Body em application/json:  
```js  
{
	"codigo": "1000",
	"categoria": "Dúvidas",
	"produto": "Gmail for Business",
	"mensagem": "Gostaria de saber quanto me custa ter 50 e-mails no meu domínio, por gentileza.",
	"status": "Aguardando"
}
```

* Devolução:  

```js  
{
  "statusCode": 200,
  "description": "Novo ticket cadastrado com sucesso!",
  "data": {
    "__v": 0,
    "updated": "",
    "created": "Thu Mar 23 2017 23:25:24 GMT-0300 (-03)",
    "status": "Aguardando",
    "mensagem": "Gostaria de saber quanto me custa ter 50 e-mails no meu domínio, por gentileza.",
    "produto": "Gmail for Business",
    "categoria": "Dúvidas",
    "codigo": 1000,
    "_id": "58d483dc5c609907146cc010",
    "abertura": "2017-03-24T02:26:36.750Z"
  },
  "error": false,
  "status": "OK"
}
```


##### GET - `/api/tickets/:ticket_id`

* Link: http://localhost:8282/api/tickets/:ticket_id  
* Devolução:

```js  
{
  "statusCode": 200,
  "data": {
    "_id": "58d483dc5c609907146cc010",
    "updated": "",
    "created": "Thu Mar 23 2017 23:25:24 GMT-0300 (-03)",
    "status": "Aguardando",
    "mensagem": "Gostaria de saber quanto me custa ter 50 e-mails no meu domínio, por gentileza.",
    "produto": "Gmail for Business",
    "categoria": "Dúvidas",
    "codigo": 1000,
    "__v": 0,
    "fechamento": "2017-03-24T02:28:02.117Z",
    "abertura": "2017-03-24T02:26:36.750Z"
  },
  "error": false,
  "status": "OK"
}
```

##### PUT - `/api/tickets/:ticket_id`

* Link: http://localhost:8282/api/tickets/:ticket_id  
* Body em application/json:

```js  
{
	"codigo": "1000",
	"categoria": "Dúvidas",
	"produto": "Gmail for Business",
	"mensagem": "Gostaria de saber quanto me custa ter 50 e-mails no meu domínio, por gentileza.",
	"status": "Em aberto"
}
```

* Devolução:  

```js  
{
  "statusCode": 200,
  "description": "Ticket atualizado com sucesso!",
  "data": {
    "_id": "58d483dc5c609907146cc010",
    "updated": "Thu Mar 23 2017 23:25:24 GMT-0300 (-03)",
    "created": "Thu Mar 23 2017 23:25:24 GMT-0300 (-03)",
    "status": "Em aberto",
    "mensagem": "Gostaria de saber quanto me custa ter 50 e-mails no meu domínio, por gentileza.",
    "produto": "Gmail for Business",
    "categoria": "Dúvidas",
    "codigo": 1000,
    "__v": 0,
    "abertura": "2017-03-24T02:26:36.750Z"
  },
  "error": false,
  "status": "OK"
}
```

##### DELETE - `/api/tickets/:ticket_id`

* Link: http://localhost:8282/api/tickets/:ticket_id  
* Devolução

```js  
{
  "statusCode": 200,
  "description": "Ticket deletado com sucesso! bye bye ;)",
  "data": {
    "ok": 1,
    "n": 1
  },
  "error": false,
  "status": "OK"
}
```

Em qualquer rota, se acontecer algum erro durante alguma requisição, a devolução será:  

```js  
{
	"statusCode": 200,
	"data": "aqui vem a descrição completa do erro ocorrido",
	"error": true,
	"status": "NOK"
}
```


## Schemas

### Tickets

```js  
{
	codigo: { type: Number },
	categoria: { type: String, required: true },
	produto: { type: String, required: true },
	abertura: { type: Date, default: Date.now },
	fechamento: { type: Date, default: Date.now },
	mensagem: { type: String },
	arquivo: { type: String },
	atendimento: { type: String },
	status: { type: String, required: true },
	created: { type: String },
	updated: { type: String }
}
```
