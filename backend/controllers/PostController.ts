import { FastifyRequest, FastifyReply } from "fastify";

// Model
import { PostModel } from "../models/PostModel.ts";
import { UserModel } from "../models/UserModel.ts";

// Middlewares
import getToken from "../helpers/get-token.ts";
import getUserByToken from "../helpers/get-user-by-token.ts";

class PostController {
  static async createPost(request: FastifyRequest, reply: FastifyReply) {
    try {
      // Campos de texto do form
      const {
        postLabel,
        postCategory,
        postTitle,
        newsText,
        authorDescription,
      } = request.body as {
        postLabel: string;
        postCategory: string;
        postTitle: string;
        newsText: string;
        authorDescription: string;
      };

      // Arquivo enviado pelo fastify-multer
      const file = request.file;

      if (!file) {
        reply
          .status(400)
          .send({ message: "A imagem principal é obrigatória!" });
        return;
      }

      // Valida campos de texto
      if (!postLabel) {
        reply
          .status(400)
          .send({ message: "A label da postagem é obrigatória!" });
        return;
      }

      if (!postCategory) {
        reply
          .status(400)
          .send({ message: "A categoria da postagem é obrigatória!" });
        return;
      }

      if (!postTitle) {
        reply
          .status(400)
          .send({ message: "O título da postagem é obrigatório!" });
        return;
      }

      if (!newsText) {
        reply
          .status(400)
          .send({ message: "O texto da postagem é obrigatório!" });
        return;
      }

      if (!authorDescription) {
        reply
          .status(400)
          .send({ message: "A descrição do autor é obrigatória!" });
        return;
      }

      // Token e usuário
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

      // Criação do post
      const post = new PostModel({
        postLabel,
        postCategory,
        postTitle,
        newsText,
        authorID: user._id,
        authorName: user.name,
        authorDescription,
        mainImagePost: file.filename, // <-- caminho da imagem
      });

      await post.save();

      reply.status(201).send({ message: "Post cadastrado com sucesso!", post });
    } catch (err) {
      console.error("Erro ao tentar cadastrar o Post:", err);
      reply.status(500).send({ message: "Erro interno ao cadastrar o post." });
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

  static async getPostByID(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.params as { id: string };

    if (!id) {
      reply.status(401).send({ message: "ID não encontrado!" });
      return;
    }

    try {
      const post = await PostModel.findById(id).populate({
        path: "postComments.userCommentID",
        select: "name",
      });

      reply.status(200).send(post);
    } catch (err) {
      console.log(err);
    }
  }

  static async createComment(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.params as { id: string };

    const { commentText } = request.body as { commentText: string };

    if (!id) {
      reply.status(401).send({ message: "ID não encontrado!" });
      return;
    }

    if (!commentText) {
      reply.status(401).send({ messagem: "O comentário é obrigatório!" });
      return;
    }

    const post = await PostModel.findById({ _id: id });

    if (!post) {
      reply.status(401).send({ message: "Post não encontrado!" });
      return;
    }

    const token = getToken(request);
    const user = await getUserByToken(token);

    if (!user) {
      reply.status(401).send({ message: "Usuáŕio não encontrado!" });
      return;
    }

    try {
      const newComment = {
        userCommentID: user._id,
        commentText: commentText,
      };

      // adiciona no array de comentários
      post.postComments.push(newComment);

      // salva o post atualizado
      await post.save();

      reply
        .status(201)
        .send({ message: "Comentário criado com sucesso!", newComment });
    } catch (err) {
      console.log(err);
      reply
        .status(404)
        .send({ message: "Erro ao tentar criar comentário!", err });
    }
  }
}

export default PostController;
