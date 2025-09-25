# Nihon Wakusei - Site de Notícias

![Docker](https://img.shields.io/badge/docker-066da5?style=for-the-badge&logo=docker&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Deno](https://img.shields.io/badge/Deno-ffffff?style=for-the-badge&logo=deno&logoColor=black)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)
![Fastify](https://img.shields.io/badge/Fastify-000000?style=for-the-badge&logo=fastify&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-663399?style=for-the-badge&logo=css&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-%23FF9900?style=for-the-badge&logo=amazonaws&logoColor=white)

<!-- Este projeto é um site de notícias de animes, mangás, games e cultura pop japonesa. O backend foi construído usando Deno como runtime, TypeScript/JavaScript, Fastify como framework, além do JWT para controle de autenticação. Utilizei o MongoDB como banco de dados e o Mongoose como framework. Já o Frontend foi desenvolvido utilizando Next.js com TypeScript integrado e CSS puro para estilização. Todo o projeto foi conteinizado com Docker, e orquestrado com Docker compose. O projeto foi hospedado na AWS, onde utilizei o potencial da plataforma para subir para produção.

Desenvolvi este projeto para o meu portifólio pessoal, com o intuito de explorar e melhorar minhas habilidades. -->

Este projeto é um site de notícias focado em **animes, mangás, games e cultura pop japonesa**.

## 💻 Tecnologias utilizadas

### 🔹 Backend

- [Deno](https://deno.land/) (Runtime)
- [Fastify](https://fastify.dev/) (Framework)
- TypeScript/JavaScript
- JWT (Autenticação)
- [MongoDB](https://www.mongodb.com/) (Banco de Dados NoSql)
- [Mongoose](https://mongoosejs.com/) (ORM)

### 🔹 Frontend

- [Next.js](https://nextjs.org/) com TypeScript
- CSS nativo

### 🔹 Infraestrutura

- Docker (containerização)
- Docker Compose (gerenciamento de múltiplos containers em um único host)
- AWS (deploy em produção)

### 🔹 CI/CD

- [GitHub Actions](https://github.com/features/actions): Automatiza build, testes e deploy do projeto.

## 🎯 Objetivo

Desenvolvido para compor meu portfólio, este projeto teve como propósito **aplicar boas práticas modernas de desenvolvimento web**, reforçar minhas habilidades técnicas e **aprofundar conhecimentos em arquitetura, deploy e escalabilidade**.

<!-- ## Features:

- **⌚ Horário atual:** "Que horas são?"<br>
- **🔎 Pesquisa no Google:** "Pesquisar objeto no Google"<br>
- **🪙 Cotação de dólar, euro e bitcoin:** "Qual a cotação do dólar no momento?"<br>
- **📰 Últimas 5 notícias do momento:** "Quais as últimas notícias?"<br>
- **📽️ 5 filmes mais populares do momento:** "Quais os filmes mais populares no momento?"<br>
- **🎧 Abrir a melhor música, banda e álbum do mundo no Spotify:** "Qual a melhor música do mundo?"<br>
- **⛅ Clima/tempo:** "Clima em São Paulo"<br>
- **🔃 Tradutor para inglês e português:** "Traduzir para o inglês"<br>
- **📒 Criar e visualizar lembretes:** "Criar novo lembrete" ou "Visualizar lembretes"<br>
- **💻 Abrir programar na sua máquina:** "Abrir Discord"<br>
- **💤 Desligar computador em 1 hora ou meia hora:** "Desligar computador em uma hora"<br>
- **❌ Cancelar desligamento do computador:** "Cancelar desligamento"<br>
- **🙋🏽‍♀️ Fechar a assistente:** "Fechar assistente"

## Tecnologias utilizadas:

- [Deno](https://www.python.org/): Runtime Javascript
- [Next.js](https://www.python.org/): Framework React
- Outras: os, sys, webbrowser, urllib.request, json, datetime, requests -->

<!-- ## Tabela de Conteúdos

- [Instalação/Como Executar](#instalaçãocomo-executar)
- [Database](#database)
- [Live Demo](#-live-demo) -->

## Instalação

### 1. Instale o Docker em sua máquina

- Verifique como instalar em seu sistema operacional, por meio [deste link](https://docs.docker.com/get-started/).

- Instale o Docker Compose globalmente.

### 2. Instale o Deno globalmente em sua máquina

- Verifique como instalar em seu sistema operacional, por meio [deste link](https://docs.deno.com/runtime/getting_started/installation/).

- Não é necessário instalar nenhum pacote no Deno, basta instalar globalmente e depois rodar o projeto.

### 3. Instalando as dependências

- **Backend (Deno)**: Não é necessário instalar pacotes, apenas instale o runtime do Deno no seu sistema. Depois, você pode rodar o projeto normalmente.

- **Frontend**: Instale as dependências do projeto com seu gerenciador de pacotes:

```bash
# usando npm
npm install

# usando yarn
yarn
```

### 4. Configure o banco de dados MongoDB

- Crie uma conta gratuitamente no MongoDB.

- Crie um Cluster, configure um usuário e uma senha, copie o link de conexão.

### 5. Configure o .env do Backend e do Frontend

- Crie um arquivo .env dentro do diretório Backend e insira:

```bash
NIHON_WAKUSEI_DB=<LINK DE CONEXÃO>
JWT_SECRET=<SECRET KEY>
FRONTEND_URL=<PORTA 3000 PARA DESENVOLVIMENTO>
```

- Crie um arquivo .env dentro do diretório Frontend e insira:

```bash
NEXT_PUBLIC_BACKEND_URL=<PORTA 5000 PARA DESENVOLVIMENTO>
```

### 6. Clone o repositório:

```bash
git clone https://github.com/rguedesdev/nihon-wakusei.git
```

- Já vem organizando em um diretório principal que representa o projeto geral, e dentro tem dois diretório que representam o Backend e o Frontend.

## Executando o projeto:

- No terminal, dentro do diretório principal do projeto, construa as imagens com:

```bash
docker compose build
```

- Após a construção da images execute o projeto com o seguinte comando:

```bash
docker compose up
# ou em modo detached (em segundo plano):
docker compose up -d
```

- Também é possível combinar ambos os passos em um único comando:

```bash
docker compose up --build -d
```

## 🚀 Live Demo

🔗 [Clique aqui para ver a aplicação rodando](https://meuprojeto.vercel.app)

## 🎥 Demo Preview

![Demo](https://mir-s3-cdn-cf.behance.net/project_modules/1400/b814fc122808011.60e1f6ca23bac.gif)

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.
