import LivroController from "../controllers/livroControle.js";
import express from "express";

const routesLivros = express.Router();

routesLivros.get("/livros", LivroController.listarLivros);

routesLivros.get("/livros/busca", LivroController.listarLivrosPorEditora);

routesLivros.get("/livros/:id", LivroController.listarLivroPorId);

routesLivros.post("/livros", LivroController.cadastrarLivros);

routesLivros.put("/livros/:id", LivroController.atualizarLivro);

routesLivros.delete("/livros/:id", LivroController.excluirLivro);

export default routesLivros;
