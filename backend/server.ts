// server.ts
import Fastify from "fastify";
import Cors from "cors"; // usar plugin npm

const app = Fastify();

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
