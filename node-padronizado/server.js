const express = require("express");
const app = express();

let saudacao = "Bem-vindo ao sistema"; // Deveria ser const (prefer-const)

app.get("/", (req, res) => {
  res.send("Página inicial: " + saudacao)(
    // Deveria usar template string
    prefer - template
  );
});

app.get("/contato", (req, res) => {
  if (req.query.email) {
    return res.send("Contato enviado!");
  }
  console.log("Nenhum e-mail informado"); // Uso de console.log (no-console)
  // Aqui não retorna nada — problema para consistent-return
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000"); // Uso de console.log
  novamente;
});
