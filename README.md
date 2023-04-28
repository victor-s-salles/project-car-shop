---READEME EM CONSTRUÇÃO---


# Car Shop Project

Este repositório contém o projeto "Car Shop", desenvolvido como parte do curso de Desenvolvimento Web Full Stack da Trybe.

## Descrição detalhada

O projeto "Car Shop" é uma aplicação web de uma loja de carros, onde é possível cadastrar novos carros, listar carros já cadastrados, atualizar informações dos carros e remover carros. A aplicação também permite o cadastro de usuários e a realização de login para acesso às funcionalidades do sistema.

## Funcionalidades

- Cadastro de novos carros
- Listagem de carros cadastrados
- Atualização de informações dos carros
- Remoção de carros
- Cadastro de usuários
- Login de usuários

## Tecnologias utilizadas

- HTML
- CSS
- JavaScript
- Node.js
- Express
- MongoDB
- Mongoose
- JWT
- bcrypt

## Instalação do projeto localmente

Para rodar o projeto localmente, é necessário ter instalado o Node.js e o MongoDB em sua máquina.

1. Clone o repositório para sua máquina:
```
git clone https://github.com/tryber/sd-025-b-project-car-shop.git
```

2. Acesse o diretório do projeto:
```
cd sd-025-b-project-car-shop
```

3. Instale as dependências do projeto:
```
npm install
```

4. Inicie o servidor local:
```
npm start
```

5. Acesse a aplicação em seu navegador, através do endereço:
```
http://localhost:3000
```

## Endpoints da API

### Carros

- **POST** `/cars` - Cadastra um novo carro no sistema
  - Parâmetros:
    - `model` (string) - Modelo do carro
    - `year` (number) - Ano do carro
    - `color` (string) - Cor do carro
    - `status` (boolean) - status que define se um veículo pode ou não ser comprado (este atributo deve ser opcional e se não passado, deve ser false)
    - `buyValue` (number) - Valor de compra do veículo
    - `buyValue` (number) - Valor de compra do veículo
    - `buyValue` (number) - Valor de compra do veículo
  - Respostas:
    - `201` - Carro cadastrado com sucesso
    - `404` - Requisição inválida, carro não encontrdo
    - `422` - Requisição inválida, mongo id inválido
    - `500` - Erro interno do servidor

- **GET** `/cars` - Lista todos os carros cadastrados no sistema
  - Parâmetros:
    - Nenhum
  - Respostas:
    - `200` - Lista de carros retornada com sucesso
    - `500` - Erro interno do servidor

- **GET** `/cars/:id` - Retorna as informações de um carro específico
  - Parâmetros:
    - `id` (string) - ID do carro desejado
  - Respostas:
    - `200` - Informações do carro retornadas com sucesso
    - `422` - Requisição inválida, ID inválido ou ausente
    - `404` - Carro não encontrado
    - `500` - Erro interno do servidor

- **PUT** `/cars/:id` - Atualiza as informações de um carro específico
  - Parâmetros:
    - `id` (string) - ID do carro a ser atualizado
    - `model` (string) - Novo modelo do carro
    - `year` (number) - Novo ano do carro
    - `manufacturer` (string) - Novo fabricante do carro
    - `price` (number) - Novo preço do carro
  - Respostas:
    - `200` - Carro atualizado com sucesso
    - `400` - Requisição inválida, falta de parâmetros obrigatórios
    - `401` - Usuário não autenticado
    - `404` - Carro não encontrado
    - `500` - Erro interno do servidor

- **DELETE** `/cars/:id` - Remove um carro específico do sistema
  - Parâmetros:
    - `id` (string) - ID do carro a ser removido
 

## Agradecimentos

Agradecemos a Trybe por proporcionar a oportunidade de desenvolver este projeto e aprender as tecnologias utilizadas.
