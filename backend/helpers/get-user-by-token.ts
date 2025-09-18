import { UserModel } from "../models/UserModel.ts";
import jwt, { JwtPayload } from "jsonwebtoken";
import "dotenv";

const getUserByToken = async (token: string) => {
  const jwtSecret = Deno.env.get("JWT_SECRET");
  if (!jwtSecret)
    throw new Error("Variável de ambiente JWT_SECRET não definida");

  const decoded = jwt.verify(token, jwtSecret as string) as JwtPayload;

  const userId = decoded.id;

  const user = await UserModel.findOne({ _id: userId }).select("-password");

  if (user) {
    return user;
  } else {
    console.log("Ocorreu um erro ao tentar obter o usuário!");
    return null;
  }
};

export default getUserByToken;

// import { UserModel } from "../models/UserModel.ts";
// import jwt, { JwtPayload } from "jsonwebtoken";
// import "dotenv";

// interface IDecodedToken extends JwtPayload {
//   id: string;
// }

// const getUserByToken = async (token: string) => {
//   const jwtSecret = Deno.env.get("JWT_SECRET");
//   if (!jwtSecret)
//     throw new Error("Variável de ambiente JWT_SECRET não definida");

//   try {
//     const decoded = jwt.verify(token, jwtSecret) as IDecodedToken;

//     const user = await UserModel.findOne({ _id: decoded.id }).select(
//       "-password"
//     );

//     return user ?? null;
//   } catch (err) {
//     console.error("Erro ao verificar token:", err);
//     return null; // se o token for inválido ou expirado
//   }
// };

// export default getUserByToken;
