const fs = require("fs");
const path = require("path");

// Caminho para o arquivo JSON com os dados
const dataFilePath = path.join(__dirname, "..", "data", "filmes.json");

// Controller function to handle GET request for movie data
const getFilmes = (req, res) => {
  // Read the movies data from the JSON file
  fs.readFile(dataFilePath, "utf8", (err, data) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "Erro ao ler os dados dos filmes" });
    }

    // Parse the data and send it as a response
    const filmes = JSON.parse(data);
    res.json(filmes);
  });
};

module.exports = {
  getFilmes,
};
