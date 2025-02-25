const express = require("express");
const router = express.Router();
const {
  obtenerLiga,
  obtenerEstadoLiga,
} = require("../controllers/ligaController");

router.get("/", obtenerLiga);
router.get("/estado", obtenerEstadoLiga);

module.exports = router;
