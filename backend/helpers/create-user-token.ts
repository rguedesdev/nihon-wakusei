import { FastifyReply } from "fastify";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

type ObjectId = mongoose.Types.ObjectId;

interface IUser {
  _id: string | ObjectId;
  name: string;
}

const jwtSecret = Deno.env.get("JWT_SECRET");
if (!jwtSecret) throw new Error("Variável de ambiente JWT_SECRET não definida");

const createUserToken = async (
  user: IUser,
  //   request: FastifyRequest,
  reply: FastifyReply
) => {
  // Criar Token de Acesso ao criar cadastro
  const token = jwt.sign(
    {
      id: user._id.toString(),
      name: user.name,
    },
    jwtSecret
  );

  // Retornar Token
  reply.status(200).send({
    message: "Cadastro/Login realizado com sucesso!",
    token: token,
    userID: user._id.toString(),
  });
};

export default createUserToken;
