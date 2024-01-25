import LivroController from "../controllers/livroControle.js";
import express from "express";

const routes = express.Router();

routes.get("/livros", LivroController.listarLivros);

routes.get("/livros/:id", LivroController.listarLivroPorId);

routes.post("/livros", LivroController.cadastrarLivros);

routes.put("/livros/:id", LivroController.atualizarLivro);

routes.delete("/livros/:id", LivroController.excluirLivro);

export default routes;
