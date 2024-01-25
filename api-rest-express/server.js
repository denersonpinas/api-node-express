// import http from "http";
import "dotenv/config.js";
import app from "./src/app.js";

const PORT = 8585;

app.listen(PORT, () => {
  console.log("servidor escutando: http://localhost:8585");
});
