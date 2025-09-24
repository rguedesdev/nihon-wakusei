// server.ts
import Fastify from "fastify";
import multipart from "npm:@fastify/multipart"; // parser obrigatório
import Cors from "cors"; // usar plugin npm
import fastifyStatic from "npm:@fastify/static";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = Fastify();

// <--- isso faz o Fastify aceitar multipart/form-data
await app.register(multipart);

// 🔑 serve arquivos da pasta "public" (igual express.static)
await app.register(fastifyStatic, {
  root: join(__dirname, "public"),
  prefix: "/public/",
});

await app.register(Cors, {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
});

// Importando as rotas
import UserRoutes from "./routes/UserRoutes.ts";
import PostRoutes from "./routes/PostRoutes.ts";

// Registro do prefixo das rotas
app.register(UserRoutes, { prefix: "/users" });
app.register(PostRoutes, { prefix: "/posts" });

// Configuração da porta
const port = 5000;

console.log(`Servidor rodando em http://localhost:${port}`);
await app.listen({ port });
