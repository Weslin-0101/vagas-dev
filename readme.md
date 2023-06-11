# Teste Para Desenvolvedor - Como Rodar o Projeto em Localhost:

O projeto foi refatorado utiliznado como princípio o DDD (Domain-Driven Design) e o Clean Architecute para que o mesmo esteja bem desacoplado
e com um design de pastas que torne fácil a manutenção do código, seguindo o **SOLID**

## 01 Passo:

Ao fazer o **git clone** do projeto e acessar o mesmo dentro da seu IDE, abra o terminal dentro do projeto e rode o seguinte comando:

```
    npm run install
```

Esse comando vai ser responsável por baixar todas as dependências do projeto.

## 02 Passo:

Crie um arquivo na raiz do projeto chamado **.env** e passe para dentro desse arquivo tudo o que está escrito dentro do arquivo **.env.example**.

Após isso, dentro da variável de ambiente **DATABASE_URL**, adicione a url do seu banco de dados. Você pode pegar o banco de dados que já está criado
dentro do arquivo **docker-compose.yml**. Lá vai estar os enviroments como username, password e o nome do banco de dados para acessá-lo localmente.

## 03 Passo:

Tenha o Docker instalado em seu PC caso queira subir o container do banco de dados que criei no arquivo **docker-compose.yml**.

Caso já possua o Docker em seu PC, rode o seguinte comando no terminal dentro da raiz do projeto:

```
    docker-compose up -d
```

Esse comando vai ser responsável para subir o bando de dados no Docker, após isso vai poder acessar o mesmo dentro do programa que queira para visualizar
o banco de dados. Um bom programa que costumo usar é o DBeaver!

## 04 Passo:

Rode os seguintes comandos respectivamente no terminal dentro da raiz do projeto:

```
    npm run build

    npm run start
```

O comando **npm run build** é responsável para buildar a aplicação, do qual vai gerar uma pasta chamada **dist** na raiz do projeto.
O comando **npm run start** vai iniciar a sua aplicação em localhost, do qual está definida com a url: **http://localhost:3002**

## 05 Passo:

Tenha o PostMan instalado em seu PC ou qualquer outro programa para que possa bater nos endpoints da aplicação após a mesma já estar iniciada.

temos os seguintes endpoints configurados dentro da aplicação:

- http://localhost:3002/users          -> Responsável para adicionar um usuário passando o **nome** e o **job**
- http://localhost:3002/users/:name    -> Responsável para buscar o usuário dentro do banco de dados passando o nome pela url
- http://localhost:3002/users/:id      -> Responsável para atualizar as informações da conta do usuário passando o ID do mesmo pela url
- http://localhost:3002/users/:name    -> Responsável para deletar o usuário dentro do banco de dados passando o nome pela url