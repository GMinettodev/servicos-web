const {
  getAlunos,
  createAluno,
  updateAluno,
  deleteAluno,
} = require("./controllers/AlunosController");
function handleRequest(req, res) {
  res.setHeader("Content-Type", "application/json");
  const routeKey = `${req.method} ${req.url}`;
  switch (true) {
    case routeKey === "GET /api/alunos":
      getAlunos(req, res); // Listar Alunos
      break;
    case routeKey === "POST /api/alunos":
      createAluno(req, res); // Criar Aluno
      break;
    case req.url.startsWith("/api/alunos/") && req.method === "PUT":
      updateAluno(req, res); // Atualizar Aluno
      break;
    case req.url.startsWith("/api/alunos/") && req.method === "DELETE":
      deleteAluno(req, res); // Deletar Aluno
      break;
    default:
      res.statusCode = 404;
      res.end(JSON.stringify({ message: "Rota não encontrada" })); // Responde com 404 para rotas não encontradas
      break;
  }
}
module.exports = { handleRequest };
