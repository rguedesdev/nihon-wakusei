import { FastifyInstance } from "fastify";
import PostController from "../controllers/PostController.ts";

// Middlewares
import verifyToken from "../helpers/verifyToken.ts";
import { imageUpload } from "../helpers/image-upload.ts";

async function PostRoutes(fastify: FastifyInstance) {
  fastify.post(
    "/create",
    { preHandler: [verifyToken, imageUpload.single("mainImagePost")] },
    PostController.createPost
  );

  fastify.get("/", PostController.getAllPosts);

  fastify.get("/:id", PostController.getPostByID);

  fastify.post("/create-comment/:id", PostController.createComment);
}

export default PostRoutes;
