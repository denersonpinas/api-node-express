import express from "express";

const app = express();
app.use(express.json()); // Middleware: Executa o express.json em todas as requisições para ser convertido em json

const livros = [
  {
    id: 1,
    titulo: "O Senhor dos Anéis",
  },
  {
    id: 2,
    titulo: "O Hobbit",
  },
];

const buscaLivro = (id) => livros.findIndex((livro) => livro.id === Number(id));

app.get("/", (req, res) => {
  res.status(200).send("Curso de Node.js");
});

app.get("/livros", (req, res) => {
  res.status(200).json(livros);
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
