// Importa o framework Express
const express = require("express");

// Importa o controller responsável por lidar com rotas públicas da aplicação
const PublicController = require("../controllers/public.controller");

// Cria uma nova instância do roteador do Express para as rotas públicas
const router = express.Router();

// Define a rota GET /home que chama o método home do PublicController
router.get("/home", PublicController.home);

// Exporta o roteador configurado para ser utilizado na aplicação
module.exports = router;
