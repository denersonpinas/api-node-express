import express from "express";
import livros from "./livrosRoutes.js";
import autores from "./autoresRoutes.js";

/**
 * Midlleware para centralizar todas as rotas criadas e futuras (ex: Livros, Autores, etc...)
 */
const routes = (app) => {
  app
    .route("/")
    .get((req, res) => res.status(200).send("Cusro Node.js e Express!"));

  /**
   * express.json() é um middleware que executa o express.json em todas as requisições para ser convertido em json
   */
  app.use(express.json(), livros, autores);
};

export default routes;
