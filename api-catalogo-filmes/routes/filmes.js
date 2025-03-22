const express = require("express");
const router = express.Router();

// Import the movie controller
const filmeController = require("../controllers/filmeController");

// Define the route for fetching movies (GET request)
router.get("/filmes", filmeController.getFilmes);

module.exports = router;
