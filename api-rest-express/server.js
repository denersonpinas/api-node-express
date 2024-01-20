import http from "http";

const PORT = 8585;

const rotas = {
  "/": "Curso de Node.js e Express API",
  "/livros": "Entrei na rota Livros",
  "/autores": "Entrei na rota Autores",
};

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(rotas[req.url]);
});

server.listen(PORT, () => {
  console.log("servidor escutando: http://localhost:8585");
});
