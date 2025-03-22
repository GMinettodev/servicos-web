// Controlador para listar todos os Alunos
function getAlunos(req, res) {
  // Dados simulados de Alunos (simula o acesso ao banco de dados)
  const Alunos = [
    { id: 1, nome: "John", curso: "Informática", idade: "20" },
    { id: 2, nome: "Carlos", curso: "Matemática", idade: "19" },
    { id: 3, nome: "Maria", curso: "Letras", idade: "23" }
  ];
  // Define o status de sucesso e envia a lista de Alunos como JSON
  res.statusCode = 200;
  res.end(JSON.stringify(Alunos));
}
// Controlador para criar um novo Aluno
function createAluno(req, res) {
  let body = "";
  // Recebe os dados do corpo da requisição em partes (chunks)
  req.on("data", (chunk) => {
    body += chunk.toString();
  });
  // Processa os dados após a recepção completa
  req.on("end", () => {
    try {
      const novoAluno = JSON.parse(body); // Converte o corpo da requisição de JSON para um objeto
      novoAluno.id = Date.now(); // Gera um ID único (em uma aplicação real, o banco de dados geraria o ID)
      // Define o status de criação e envia o Aluno criado como resposta
      res.statusCode = 201;
      res.end(JSON.stringify({ message: "Aluno criado", Aluno: novoAluno }));
    } catch (error) {
      // Lida com erros de parsing JSON
      res.statusCode = 400;
      res.end(JSON.stringify({ message: "Erro ao processar o Aluno" }));
    }
  });
}
// Controlador para atualizar um Aluno
function updateAluno(req, res) {
  const id = req.url.split("/")[3]; // Extrai o ID da URL
  let body = "";
  // Recebe os dados do corpo da requisição em partes (chunks)
  req.on("data", (chunk) => {
    body += chunk.toString();
  });
  // Processa os dados após a recepção completa
  req.on("end", () => {
    try {
      const AlunoAtualizado = JSON.parse(body); // Converte o corpo da requisição de JSON para um objeto
      AlunoAtualizado.id = parseInt(id, 10); // Garante que o ID seja um número inteiro
      // Define o status de sucesso e envia o Aluno atualizado como resposta
      res.statusCode = 200;
      res.end(
        JSON.stringify({
          message: "Aluno atualizado",
          Aluno: AlunoAtualizado,
        })
      );
    } catch (error) {
      // Lida com erros de parsing JSON
      res.statusCode = 400;
      res.end(JSON.stringify({ message: "Erro ao processar o Aluno" }));
    }
  });
}
// Controlador para deletar um Aluno
function deleteAluno(req, res) {
  const id = req.url.split("/")[3]; // Extrai o ID da URL
  // Define o status de sucesso e envia uma mensagem confirmando a exclusão
  res.statusCode = 200;
  res.end(JSON.stringify({ message: `Aluno com ID ${id} deletado` }));
}
// Exporta os controladores para serem usados em outros módulos
module.exports = {
  getAlunos,
  createAluno,
  updateAluno,
  deleteAluno,
};
