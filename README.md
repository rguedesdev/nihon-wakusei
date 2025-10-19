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
![AWS](https://img.shields.io/badge/AWS-141f2e?style=for-the-badge&logo=amazonaws&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white)

Este projeto é um site de notícias focado em **animes, mangás, games e cultura pop japonesa**.

## 🎯 Objetivo

Desenvolvido para compor meu portfólio, este projeto teve como propósito **aplicar boas práticas modernas de desenvolvimento web**, reforçar minhas habilidades técnicas e **aprofundar conhecimentos em arquitetura, deploy e escalabilidade**.

## ✨ Features

### ✅ Implementadas

- Autenticação com JWT
- Cadastro e login de usuários (Backend)
- CRUD de postagens (criar, listar, editar, deletar)
- Upload de imagens via multipart/form-data
- Integração com MongoDB para persistência de dados
- Deploy automatizado na AWS
- Tema Claro/Escuro

### 🔜 Em desenvolvimento

- Cadastro e login de usuários (Frontend)
- Sistema de comentários nas postagens (Melhorias)
- Likes e compartilhamentos
- Sistema de busca de posts
- Páginação
- Dashboard (Painel administrativo)
- Testes automatizados (CI/CD mais completo)

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

## 🛠️ Instalação

### 1. Instale o Docker em sua máquina

- Verifique como instalar em seu sistema operacional, por meio [deste link](https://docs.docker.com/get-started/).

- Instale o Docker Compose globalmente.

### 2. Instale o Deno globalmente em sua máquina

- Verifique como instalar em seu sistema operacional, por meio [deste link](https://docs.deno.com/runtime/getting_started/installation/).

- Não é necessário instalar nenhum pacote no Deno, basta instalar globalmente e depois rodar o projeto.

### 3. Clone o repositório:

```bash
git clone https://github.com/rguedesdev/nihon-wakusei.git
```

- Já vem organizando em um diretório principal que representa o projeto geral, e dentro tem dois diretório que representam o Backend e o Frontend.

### 4. Instalando as dependências

- **Backend (Deno)**: Não é necessário instalar pacotes, apenas instale o runtime do Deno no seu sistema. Depois, você pode rodar o projeto normalmente.

- **Frontend**: Instale as dependências do projeto com seu gerenciador de pacotes:

```bash
# usando npm
npm install

# usando yarn
yarn
```

### 5. Configure o banco de dados MongoDB

- Crie uma conta gratuitamente no MongoDB.

- Crie um Cluster, configure um usuário e uma senha, copie o link de conexão.

### 6. Configure o .env do Backend e do Frontend

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

## ▶️ Executando o projeto:

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

🔗 [Clique aqui para ver a aplicação rodando em produção](https://meuprojeto.vercel.app)

## 🎥 Demo Preview

![Demo](https://mir-s3-cdn-cf.behance.net/project_modules/1400/b814fc122808011.60e1f6ca23bac.gif)

## <img src="https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svgs/solid/image.svg" width="22" /> Prints do Projeto

### 🔹 Página Inicial

![Home](https://i.imgur.com/seuArquivo.png)

### 🔹 Dashboard

![Dashboard](./assets/dashboard.png)

### 🔹 Tema Escuro

![Dark Mode](./assets/dark-mode.png)

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.
