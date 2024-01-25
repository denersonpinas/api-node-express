import AutorController from "../controllers/autorController.js";
import express from "express";

const routesAutores = express.Router();

routesAutores.get("/autores", AutorController.listarAutor);

routesAutores.get("/autores/:id", AutorController.listarAutorPorId);

routesAutores.post("/autores", AutorController.cadastrarAutor);

routesAutores.put("/autores/:id", AutorController.atualizarAutor);

routesAutores.delete("/autores/:id", AutorController.excluirAutor);

export default routesAutores;
