import { autor } from "../models/Autor.js";

class AutorController {
  static async listarAutor(req, res) {
    try {
      const listaAutor = await autor.find({});

      res.status(200).json(listaAutor);
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha ao buscar autores` });
    }
  }

  static async cadastrarAutor(req, res) {
    try {
      const novoAutor = await autor.create(req.body);

      res
        .status(201)
        .json({ message: "Autor criado com sucesso", autor: novoAutor });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha ao cadastrar autor` });
    }
  }

  static async listarAutorPorId(req, res) {
    try {
      const id = req.params.id;
      const autorEncontrado = await autor.findById(id);

      res.status(200).json(autorEncontrado);
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha ao buscar autor` });
    }
  }

  static async atualizarAutor(req, res) {
    try {
      const id = req.params.id;
      await autor.findByIdAndUpdate(id, req.body);

      res.status(200).send();
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha ao atualizar autor` });
    }
  }

  static async excluirAutor(req, res) {
    try {
      const id = req.params.id;
      await autor.findByIdAndDelete(id);

      res.status(200).send();
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha ao excluir autor` });
    }
  }
}

export default AutorController;
