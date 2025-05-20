// Importa a conexão pool com o banco de dados
const db = require("../config/database");

class UserModel {
  // Busca um usuário pelo email
  static async findByEmail(email) {
    const [rows] = await db.query("SELECT * FROM users WHERE email = ?", [
      email,
    ]);
    return rows[0];
  }
  
  // Cria um novo usuário
  static async create(user) {
    const { email, password, role } = user;
    const [result] = await db.query(
      "INSERT INTO users (email, password, role) VALUES (?, ?, ?)",
      [email, password, role]
    );
    return result.insertId; // Retorna o ID do usuário criado
  }
}

// Exporta a classe UserModel para ser usada nos services
module.exports = UserModel;
