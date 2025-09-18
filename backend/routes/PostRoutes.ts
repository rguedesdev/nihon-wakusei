import { FastifyInstance } from "fastify";
import PostController from "../controllers/PostController.ts";

// Middlewares
import verifyToken from "../helpers/verifyToken.ts";

async function PostRoutes(fastify: FastifyInstance) {
  fastify.post(
    "/create",
    { preHandler: [verifyToken] },
    PostController.createPost
  );

  fastify.get("/", PostController.getAllPosts);
}

export default PostRoutes;
