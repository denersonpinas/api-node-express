import express from "express";
import connectDB from "./config/dbConnect.js";
import livro from "./models/Livro.js";

const connection = await connectDB();

connection.on("error", (error) => {
  console.error(`Erro na conexão: ${error}`);
});

connection.once("open", () => {
  console.log("Conexão realizada...");
});

const app = express();
app.use(express.json()); // Middleware: Executa o express.json em todas as requisições para ser convertido em json

app.get("/", (req, res) => {
  res.status(200).send("Curso de Node.js");
});

app.get("/livros", async (req, res) => {
  const listaLivros = await livro.find({});

  res.status(200).json(listaLivros);
});

app.get("/livros/:id", (req, res) => {
  const index = buscaLivro(req.params.id);

  res.status(200).json(livros[index]);
});

app.post("/livros", (req, res) => {
  livros.push(req.body);
  res.status(201).send();
});

app.put("/livros/:id", (req, res) => {
  const index = buscaLivro(req.params.id);
  livros[index].titulo = req.body.titulo;

  res.status(200).json(livros);
});

app.delete("/livros/:id", (req, res) => {
  const index = buscaLivro(req.params.id);
  livros.splice(index, 1);

  res.status(200).send();
});

export default app;
