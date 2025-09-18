// routes/UserRoutes.ts
import { FastifyInstance } from "fastify";
import UserController from "../controllers/UserController.ts";

async function UserRoutes(fastify: FastifyInstance) {
  fastify.post("/sign-up", UserController.signUp);

  fastify.post("/sign-in", UserController.signIn);

  fastify.get("/check-user", UserController.checkUser);
}

export default UserRoutes;
