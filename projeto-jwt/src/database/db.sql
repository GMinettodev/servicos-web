-- Cria o banco de dados se não existir
CREATE DATABASE IF NOT EXISTS projeto_jwt_db CHARACTER
SET
    utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Usa o banco de dados
USE projeto_jwt_db;

-- Cria a tabela de usuários
CREATE TABLE
    IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        role VARCHAR(50) NOT NULL DEFAULT 'user',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );