# Suporte ao Usuário Taller - API

## Instruções de Instalação

Ao clonar o repositório em seu computador e, antes de tentar rodar a API localmente, lembre de ter instalado globalmente os seguintes pacotes:  

* Node.js;  
* Express.js;  
* MongoDB;  
* Nodemon.

Tendo os pacotes supracitados instalados globalmente em seu computador, navegue pelo terminal até a pasta do projeto `./help-desk-api-taller` e execute o seguinte comando no terminal: `npm install`. Isso fará com que seja instalado todas as dependências necessárias para que o projeto funcione normalmente sem erros.  

Para executar o projeto, antes de mais nada, você precisa se certificar que o serviço `mongod` está em execução e aguardando por novas conexões. Pois como trabalhamos com o MongoDB como banco NoSQL em nosso projeto, se faz necessário tê-lo em execução para que o projeto funcione normalmente.

Feito isso, para executar o projeto temos duas opções, podendo optar por qualquer uma delas, sendo: `nodemon app.js` OU `npm run dev`. Tais comandos devem ser executado no terminal, dentro do diretório do projeto, `./help-desk-api-taller`.

Para testar a API, basta acessá-la via Postman, com o seguinte endereço: http://localhost:8282/api/tickets/. Caso você queria realizar testes na API isoladamente do Dashboard, poderá efetuar testes em clientes como Postman.


## Documentação

### Tecnologias utilizadas

* Node.js;  
* Express.js;  
* MongoDB;  
* Mongoose;  
* JWT.


### Usuários

#### Schema

```js  
{
	nome: { type: String, required: true },
	email: { type: String, lowercase: true, unique: true, required: true },
	password: { type: String, required: true },
	created: { type: String },
	updated: { type: String }
}
```


#### Endpoints

##### GET `./api/users/`

Visualiza todos os usuários cadastrados.

- Não é necessário enviar *headers* ou *body*.


##### POST `./api/users/`

É possível cadastrar um novo usuário.

###### Modelo

```js  
{
    "nome": "nome do usuário",
    "email": "e-mail_do_usuario@usuario.com",
    "password": "senha"
}
```

#####  GET `./api/users/:user_id`

Visualiza os dados de um usuário em específico. Não é necessário enviar *headers*. Basta enviar ao final da enpoint o **_id** do usuário desejado.


##### PUT `./api/users/:user_id`

Atualiza os dados de um usuário em específico. Não é necessário enviar *headers*. Basta enviar os dados para atualização conforme modelo a seguir e o **_id** do usuário ao final da enpoint.


###### Modelo

```js  
{
    "nome": "nome do usuário",
    "email": "e-mail_do_usuario@usuario.com",
    "password": "senha"
}
```


##### DELETE `./api/users/:user_id`

Deleta um usuário em específico do banco de dados. Não é necessário enviar *headers*. Basta enviar ao final da enpoint o **_id** do usuário desejado para deletá-lo do banco de dados.


### Autenticação

Todas as requisições da Dashboard deverão ser autenticadas e autorizadas. Ou seja, todas as endpoints de tickets estão protegidas. A cada nova requisição em tickets você precisará se autenticar com seu e-mail e senha, assim, receberá um token que será responsável por autenticar e autorizar suas requisições.


##### POST `./api/auth/`

É através dessa endpoint que você irá se autenticar e requisitar um token de acesso.


###### Modelo

```js  
{
    "email": "e-mail_do_usuario@usuario.com",
    "password": "senha"
}
```

Se o login for bem sucedido, será devolvido um novo token para seu acesso. Cada token gerado tem a **duração de 8 horas**, após esse período, o token é expirado e você precisa solicitar um novo token para realizar novas requisições.


### Tickets

#### Schema

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


#### Endpoints

##### GET - `/api/tickets/`

Visualiza todos os tickets cadastrados. É necessário enviar o *header* de **Authorization** com o token de acesso do usuário, conforme exemplo a seguir: **Authorization: JWT token**.


##### POST - `/api/tickets/`

Cadastra um novo ticket. Além de enviar o *body* com os dados do novo ticket, também é necessário enviar o *header* de **Authorization** com o token de acesso do usuário, conforme exemplo a seguir: **Authorization: JWT token**.


###### Modelo

```js  
{
	"categoria": "Dúvidas",
	"produto": "Gmail for Business",
	"mensagem": "Gostaria de saber quanto me custa ter 50 e-mails no meu domínio, por gentileza.",
	"status": "Aguardando"
}
```

Além dos campos de *created* e *updated* serem preenchidos automaticamente pela API, o campo *codigo* também é preenchido automaticamente pela API.


##### GET - `/api/tickets/:ticket_id`

Visualiza os dados de um ticket em específico. Basta enviar ao final da enpoint o **_id** do usuário desejado, juntamente com o *header* de **Authorization** com o token de acesso do usuário, conforme exemplo a seguir: **Authorization: JWT token**.


##### PUT - `/api/tickets/:ticket_id`

Atualiza os dados de um ticket em especifico. Além de enviar o *body* com os dados para atualização, basta enviar ao final da enpoint o **_id** do usuário desejado para deletá-lo do banco de dados, juntamente com o *header* de **Authorization** com o token de acesso do usuário, conforme exemplo a seguir: **Authorization: JWT token**.


###### Modelo

```js  
{
	"categoria": "Dúvidas",
	"produto": "Gmail for Business",
	"mensagem": "Gostaria de saber quanto me custa ter 50 e-mails no meu domínio, por gentileza.",
	"status": "Aguardando"
}
```


##### DELETE - `/api/tickets/:ticket_id`

Deleta um ticket em específico. Basta enviar ao final da enpoint o **_id** do usuário desejado para deletá-lo do banco de dados, juntamente com o *header* de **Authorization** com o token de acesso do usuário, conforme exemplo a seguir: **Authorization: JWT token**.
