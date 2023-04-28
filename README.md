---README EM CONSTRUÇÃO---


# Car Shop Project

Este repositório contém o projeto "Car Shop", desenvolvido como parte do curso de Desenvolvimento Web Full Stack da Trybe.

## Descrição detalhada

O projeto "Car Shop" é uma aplicação web de uma loja de carros e motos, onde é possível cadastrar novos veículos, listar veículos já cadastrados, atualizar informações dos veículos e remover veículos.

## Funcionalidades

- Cadastro de novos veículos
- Listagem de veículos cadastrados
- Atualização de informações dos veículos
- Remoção de veículos


## Tecnologias utilizadas

- Node.js
- TypeScript
- Express
- MongoDB
- Mongoose
- Docker / Docker Compose (1.29^)
- Jest
- Chai
- Sinon
- Eslint

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

4. Inicie o servidor docker:
```
docker-compose up -d
```

5. Inicie a aplicação dentro do container docker criado
```
npm run dev
```

6. Acesse a aplicação em seu cliente, através do endereço:
```
http://localhost:3001
```

Obs: Há um arquivo .env para configurar outros valores caso necessário 

## Endpoints da API

### Carros

- **POST** `/cars` - Cadastra um novo carro no sistema
  - Parâmetros:
    - `model` (string) - Modelo do carro
    - `year` (number) - Ano do carro
    - `color` (string) - Cor do carro
    - `status` (boolean) - status que define se um veículo pode ou não ser comprado (este atributo deve ser opcional e se não passado, deve ser false)
    - `buyValue` (number) - Valor de compra do veículo
    - `doorsQty` (number) - Quantidade de portas de um carro
    - `seatsQty` (number) - Quantidade de assentos de um carro
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
    - `model` (string) - Modelo do carro
    - `year` (number) - Ano do carro
    - `color` (string) - Cor do carro
    - `status` (boolean) - status que define se um veículo pode ou não ser comprado (este atributo deve ser opcional e se não passado, deve ser false)
    - `buyValue` (number) - Valor de compra do veículo
    - `doorsQty` (number) - Quantidade de portas de um carro
    - `seatsQty` (number) - Quantidade de assentos de um carro
  - Respostas:
    - `200` - Carro atualizado com sucesso
    - `422` - Requisição inválida, falta de parâmetros obrigatórios
    - `404` - Carro não encontrado
    - `500` - Erro interno do servidor

- **DELETE** `/cars/:id` - Remove um carro específico do sistema
  - Parâmetros:
    - `id` (string) - ID do carro a ser removido



### Motos

- Se aplicam as mesmas regras dos endpoints para carros, diferindo apenas nos parametros:

 - Parâmetros:
    - `id` (string) - ID da moto desejada
    - `model` (string) - Modelo da moto
    - `year` (number) - Ano da moto
    - `color` (string) - Cor da moto
    - `status` (boolean) - status que define se um veículo pode ou não ser comprado (este atributo deve ser opcional e se não passado, deve ser false)
    - `buyValue` (number) - Valor de compra do veículo
    - `category` (string) - Categoria da moto (opções: Street, Custom ou Trail)
    - `engineCapacity` (number) - Capacidade do motor
 

## Agradecimentos

Agradecemos a Trybe por proporcionar a oportunidade de desenvolver este projeto e aprender as tecnologias utilizadas.
