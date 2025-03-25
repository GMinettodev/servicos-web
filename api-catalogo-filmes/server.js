const express = require("express");
const app = express();
const path = require("path");
const PORT = 4000;

// Importa o arquivo de middleware
const loggingMiddleware = require("./middlewares/loggingMiddleware");

// Importa a db
const dataFilePath = path.join(__dirname, "db", "data.js");

// Importa as rotas
const routesFilmes = require("./routes/filmes");
// Middlewares
app.use(loggingMiddleware);

app.get("/", (req, res) => {
  res.json({ message: "Catálogo de filmes!" });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

app.use('/api', routesFilmes);