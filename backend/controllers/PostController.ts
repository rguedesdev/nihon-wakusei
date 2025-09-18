import { FastifyRequest, FastifyReply } from "fastify";

// Model
import { PostModel } from "../models/PostModel.ts";

// Middlewares
import getToken from "../helpers/get-token.ts";
import getUserByToken from "../helpers/get-user-by-token.ts";

class PostController {
  static async createPost(request: FastifyRequest, reply: FastifyReply) {
    const {
      postLabel,
      postCategory,
      postTitle,
      newsText,
      authorID,
      authorName,
      authorDescription,
    } = request.body as {
      postLabel: string;
      postCategory: string;
      postTitle: string;
      newsText: string;
      authorID: string;
      authorName: string;
      authorDescription: string;
    };

    if (!postLabel) {
      reply.status(401).send({ message: "A label da postagem é obrigatória!" });
      return;
    }

    if (!postCategory) {
      reply.status(401).send({ message: "A label da postagem é obrigatória!" });
      return;
    }

    if (!postTitle) {
      reply
        .status(401)
        .send({ message: "O título da postagem é obrigatório!" });
      return;
    }

    if (!newsText) {
      reply.status(401).send({ message: "O texto da postagem é obrigatório!" });
      return;
    }

    if (!authorID) {
      reply
        .status(401)
        .send({ message: "O ID do autor do post é obrigatório!" });
      return;
    }

    if (!authorName) {
      reply
        .status(401)
        .send({ message: "O nome do autor do post obrigatório!" });
      return;
    }

    if (!authorDescription) {
      reply
        .status(401)
        .send({ message: "A descrição do autor do post é obrigatória!" });
      return;
    }

    const token = getToken(request);

    if (!token) {
      reply.status(401).send({ message: "Token não encontrado!" });
      return;
    }

    const user = await getUserByToken(token);

    if (!user) {
      reply.status(401).send({ message: "Usuário não encontrado!" });
      return;
    }

    try {
      const post = new PostModel({
        postLabel: postLabel,
        postCategory: postCategory,
        postTitle: postTitle,
        newsText: newsText,
        authorID: authorID,
        authorName: authorName,
        authorDescription: authorDescription,
      });

      await post.save();

      reply.status(201).send({ message: "Post caastrado com sucesso!", post });
    } catch (err) {
      console.log("Erro ao tentar cadastrar o Post!");
      return;
    }
  }

  static async getAllPosts(request: FastifyRequest, reply: FastifyReply) {
    try {
      const posts = await PostModel.find();

      reply.status(200).send(posts);
    } catch (err) {
      console.log(err);
    }
  }
}

export default PostController;
