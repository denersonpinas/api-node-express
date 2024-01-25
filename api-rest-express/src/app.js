import express from "express";
import connectDB from "./config/dbConnect.js";
import routes from "./routes/index.js";

const connection = await connectDB();

connection.on("error", (error) => {
  console.error(`Erro na conexão: ${error}`);
});

connection.once("open", () => {
  console.log("Conexão realizada...");
});

const app = express();
routes(app); // Rotas

export default app;
