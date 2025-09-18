import { FastifyRequest, FastifyReply } from "fastify";
import jwt from "jsonwebtoken";
import getToken from "./get-token.ts";
import "dotenv";

const checkToken = async (request: FastifyRequest, reply: FastifyReply) => {
  if (!request.headers.authorization) {
    return reply.status(401).send({ message: "Acesso negado!" });
  }

  const token = getToken(request);

  if (!token) {
    return reply.status(401).send({ message: "Acesso negado!" });
  }

  try {
    const jwtSecret = Deno.env.get("JWT_SECRET");
    if (!jwtSecret)
      throw new Error("Variável de ambiente JWT_SECRET não definida");

    const verified = jwt.verify(token, jwtSecret);

    // adiciona a info do usuário no request
    (request as any).user = verified;
  } catch (err) {
    console.error(err);
    return reply.status(401).send({ message: "Token inválido!" });
  }
};

export default checkToken;
