// controllers/UserController.ts
import { FastifyRequest, FastifyReply } from "fastify";
import * as bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Model
import { UserModel } from "../models/UserModel.ts";

// Middlewares
import createUserToken from "../helpers/create-user-token.ts";
import getToken from "../helpers/get-token.ts";

class UserController {
  static async signUp(request: FastifyRequest, reply: FastifyReply) {
    // Dados do Body para Cadastro
    const { name, email, password, confirmPassword } = request.body as {
      name: string;
      email: string;
      password: string;
      confirmPassword: string;
    };

    if (!name) {
      reply.status(401).send({ message: "O nome é obrigatório!" });
      return;
    }

    if (!email) {
      reply.status(401).send({ message: "O email é obrigatório!" });
      return;
    }

    if (!password) {
      reply.status(401).send({ message: "A senha é obrigatória!" });
      return;
    }

    if (!confirmPassword) {
      reply
        .status(401)
        .send({ message: "A confirmação da senha é obrigatória!" });
      return;
    }

    if (password !== confirmPassword) {
      reply.status(401).send({ message: "A senhas precisam ser iguais!" });
      return;
    }

    // Criar senha Hash (Codificada)
    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(password, salt);

    try {
      const user = new UserModel({
        name: name,
        email: email,
        password: passwordHash,
      });

      const newUser = await user.save();

      await createUserToken(newUser, reply);
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
    }
  }

  static async signIn(request: FastifyRequest, reply: FastifyReply) {
    const { email, password } = request.body as {
      email: string;
      password: string;
    };

    if (!email) {
      reply.status(401).send({ message: "O email é obrigatório!" });
      return;
    }

    if (!password) {
      reply.status(401).send({ message: "A senha é obrigatória!" });
      return;
    }

    const user = await UserModel.findOne({ email: email });

    if (!user) {
      reply
        .status(422)
        .send({ message: "Não há usuário cadastrado com esse email!" });
      return;
    }

    // Verificar se a senha digitada é igual a senha no banco de dados
    const checkPassword = await bcrypt.compare(password, user.password);

    if (!checkPassword) {
      reply.status(422).send({ message: "Senha inválida !" });
      return;
    }

    await createUserToken(user, reply);
  }

  static async checkUser(request: FastifyRequest, reply: FastifyReply) {
    let currentUser = null;

    const authHeader = request.headers.authorization;
    if (!authHeader) {
      return reply.status(401).send({ error: "Token não fornecido" });
    }

    const token = getToken(request);

    if (!token) {
      return reply.status(401).send({ error: "Token inválido ou ausente" });
    }

    try {
      interface IDecodedToken {
        id: string;
      }

      const jwtSecret = Deno.env.get("JWT_SECRET");

      if (!jwtSecret)
        throw new Error("Variável de ambiente JWT_SECRET não definida");

      const decoded = jwt.verify(token, jwtSecret) as IDecodedToken;

      currentUser = await UserModel.findById(decoded.id).select("-password");

      if (!currentUser) {
        return reply.status(401).send({ error: "Usuário não encontrado" });
      }

      return reply.status(200).send(currentUser);
    } catch (err) {
      console.error(err);
      return reply.status(401).send({ error: "Token inválido" });
    }
  }
}

export default UserController;
