const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "exemplo_db",
});

connection.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao bano de dados:", err);
    return;
  }
  console.log("Conectado ao banco de dados MySQL com sucesso!");
});

module.exports = connection;
