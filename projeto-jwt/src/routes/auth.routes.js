// Importa o framework Express
const express = require("express");

// Importa o controller responsável por gerenciar as ações de autenticação (registro e login)
const AuthController = require("../controllers/auth.controller");

// Cria uma nova instância do roteador do Express para definir as rotas relacionadas à autenticação
const router = express.Router();

// Define a rota POST /register que chama o método register do AuthController
router.post("/register", AuthController.register);

// Define a rota POST /login que chama o método login do AuthController
router.post("/login", AuthController.login);

// Exporta o roteador para ser utilizado na aplicação
module.exports = router;
