# Node.js: Criando uma API Rest com Express e MongoDB

## Aula 1 - Criando o Projeto com Node.js

Nesta aula, você aprendeu:

- O que são APIs, seus diferentes tipos, para que são utilizadas e como vai funcionar a API no contexto do nosso produto.
- O que são servidores e como criar um servidor local utilizando o módulo http nativo do Node.js.
- Como criar rotas em uma API, como se conectar e acessar rotas e de que forma as rotas são utilizadas dentro da lógica de uma API REST.

### Para saber mais

Seguem abaixo links citados durante a aula:

- [Site oficial do Express](https://expressjs.com/), com toda a documentação, casos de uso e exemplos.
- [Lista do MDN com os códigos de resposta possíveis para requisições HTTP](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status). Todas as respostas devem conter o código mais apropriado da lista, sendo os da faixa 200 os casos de sucesso, 300 de redirecionamento, 400 de falhas feitas pelo lado cliente (como uma requisição com dados faltantes ou para uma rota errada) ou 500, de erros por parte do servidor, por exemplo, um servidor indisponível.
- [Artigo da Alura “Desmistificando o protocolo HTTP”](https://www.alura.com.br/artigos/desmistificando-o-protocolo-http-parte-1?_gl=1*1ye10se*_ga*MTg2MTI0MzAyNi4xNjg5MzQ0MTM3*_ga_1EPWSW3PCS*MTcwNTcxMDc2MS45Ni4xLjE3MDU3MTE5NzUuMC4wLjA.*_fplc*JTJGdXglMkYyQkx3JTJGaXZ0VWw5dlJoSDY5VyUyQjByanFDTzJ3Y2dGVDNSUWR1VWVTNjl5UERHJTJGQmRGOVF3M3pJVXQ0OFdBYjVBaXhnJTJCTFAlMkZaNVdmM01oYVBJU0RQRmpSalhwR3duY2hvemFpZHg5T2hyJTJCOFpPVWNUJTJGeTRQYm15SlVRJTNEJTNE), com mais informações sobre o protocolo.
- [Curso de HTTP](https://cursos.alura.com.br/course/http-entendendo-web-por-baixo-dos-panos) que faz parte da nossa formação de Express.

### Passo a Passo

Nesta aula, criamos e configuramos um servidor local para responder as requisições e “servir” as respostas via HTTP na porta 3000.

No arquivo server.js:

- Importe o módulo http.
- Defina uma constante PORT com o valor 3000.
- Crie um servidor HTTP utilizando a função createServer.
- Dentro da função de callback de createServer, defina as variáveis req e res.
- Escreva o cabeçalho da resposta utilizando o método writeHead de res. O status deve ser 200 e o tipo de conteúdo deve ser text/plain.
- Termine a resposta utilizando o método end de res. O conteúdo deve ser "Curso de Node.js".
- No final do arquivo, chame o método listen de server passando a constante PORT como argumento e uma função de callback que imprime servidor escutando! no console.

## Aula 2 - Express e primeiras rotas

Nesta aula, você aprendeu:

- Como instalar e utilizar os métodos do framework Express para criação de um servidor HTTP e também para gerenciamento de requisições, respostas e criação de rotas;
- Como implementar um CRUD inicial com os métodos HTTP GET, POST, PUT e DELETE, e como utilizar os métodos do Express para cada método;
- Como testar requisições com Postman e quais são as partes de uma requisição HTTP;
- Como utilizar o Express para gerar e enviar respostas adequadas para cada tipo de requisição HTTP.

## Aula 3 - Persistindo dados

Nesta aula, você aprendeu:

- Como os bancos de dados atuam integrados a uma API, guardando os dados recebidos e processados pela API;
- Quais são as principais diferenças entre tipos de bancos de dados SQL e NoSQL e alguns casos de uso de cada tipo de banco;
- Como utilizar uma instância gratuita de um banco MongoDB na nuvem através do serviço Mongo Atlas e conectar a instância com a API;
- Os conceitos de model e schema e qual a função de cada na construção de uma API.

### Para saber mais

Seguem os links para os conteúdos mencionados durante a aula:

- [Documentação oficial do Mongoose](https://mongoosejs.com/) com exemplos, casos de uso e guia de uso da ferramenta.
- [Prisma](https://www.prisma.io/mongodb), opção como ferramenta de conexão do MongoDB a APIs Node.js. O Prisma pode ser usado com diversos gerenciadores de banco e oferece diversas funcionalidades avançadas.

## Aula 4 - Evoluindo a API

Nesta aula, você aprendeu:

- A organizar a estrutura do código de um projeto de API utilizando o padrão chamado controller;
- A evoluir as funcionalidades da API organizando as chamadas da lib Mongoose em métodos separados em um controller;
- A praticar a implementação do CRUD (Create, Read, Update e Delete) com as respostas HTTP e as rotas correspondentes.

### Para saber mais

Seguem links para os conteúdos mencionados durante a aula:

- [Curso de Programação orientada a objetos com JavaScript](https://cursos.alura.com.br/course/javascript-passos-programacao-orientada-objetos), com os primeiros passos para a aplicação de conceitos e práticas da Orientação a Objetos em projetos JavaScript, incluindo a criação e o funcionamento das classes;
- [Documentação do MongoDB sobre modelagem de dados](https://www.mongodb.com/docs/manual/data-modeling/), com mais informações sobre embedding e reference;
- [Documentação do Mongoose sobre o método](https://mongoosejs.com/docs/api/model.html#Model.findByIdAndUpdate%28%29) [findByIdAndUpdate](https://mongoosejs.com/docs/api/model.html#Model.findByIdAndUpdate%28%29).

## Aula 5 - Adicionando Funcionalidade

Nesta aula, você aprendeu:

- A evoluir as funcionalidades de uma API, unindo diferentes entidades como livro e autor;
- Como funciona o relacionamento em um banco de objetos como MongoDB utilizando o modelo de embedding;
- Como realizar buscas em API via parâmetros de query.
