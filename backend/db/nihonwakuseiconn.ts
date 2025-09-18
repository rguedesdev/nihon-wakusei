import "dotenv";
import mongoose, { Connection, ConnectOptions } from "mongoose";

const uri = Deno.env.get("NIHON_WAKUSEI_DB");
if (!uri) throw new Error("Variável de ambiente NIHON_WAKUSEI_DB não definida");

const nihonwakuseiDB: Connection = mongoose.createConnection(uri, {
  dbName: "NihonWakuseiDB",
} as ConnectOptions);

(nihonwakuseiDB as any).on("connected", () => {
  console.log("Conectado ao NihonWakuseiDB");
});

(nihonwakuseiDB as any).on("error", (err) => {
  console.error("Erro na conexão ao OtakuPayDB:", err);
});

export default nihonwakuseiDB;
