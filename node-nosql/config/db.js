const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/exemplo_nosql");
    console.log("Conectado ao MongoDB com sucesso!");
  } catch (error) {
    console.log("Erro ao conectar ao MongoDB:", error);
    process.exit;
  }
};

module.exports = connectDB;
