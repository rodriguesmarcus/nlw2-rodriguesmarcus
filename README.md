# NLW #2 - rodriguesmarcus repo

Repositório responsável pela semana NLW #2 da Rocketseat

## O projeto

O projeto consistiu em recriar o layout do Figma e deixá-lo funcional em front e back-end, utilizando as tecnologias HTML5, CSS3, JavaScript, Node.js e SQLite.

## Quero rodar na minha máquina

Para executar o projeto na sua máquina é preciso garantir que você tenha o [Node.js](https://nodejs.org/en/download/) instalado em sua máquina.
Crie um clone desse repositório e execute os comandos abaixo:

`npm install`

Para instalar todas as dependências contidas no package.json, caso queira instalar cada uma individualmente:

`npm install express`

`npm install nodemon -D`

`npm install nunjucks`

`npm install sqlite-async`

Então deve seguir até o arquivo package.json e inserir no campo `"scripts"`:

```language
"scripts": {
    "dev": "nodemon src/server.js"
},
```

Feito isso quando você pode executar o comando `npm run dev` que o nodemon irá manter o servidor local em execução enquanto você realiza alterações no código, permitindo visualizar as atualizações em tempo real sem precisar reiniciar o server.js manualmente.

## Desafios

### 01 - Página de sucesso

- Mostrar página de sucesso após o cadastro do proffy
- aguardar 2 segundos na página e redirecionar para a listagem dos proffys, com filtro
  - use setTimeout para aguardar os 2 segundos
  - location.href = ""

### 02 - Correção de bugs

- Não permitir o usuário colocar um novo campo de dia e horário, se o dia e hora anterior estiver vazio
- Funcionalidade de deletar um campo de dia e hora
- remover os `<br><br>` do texto da bio e inserir quebra de linha
