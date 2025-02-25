const express = require("express");
const router = express.Router();
const {
  obtenerLiga,
  obtenerEstadoLiga,
} = require("../controllers/ligaController");

router.get("/liga", obtenerLiga);
router.get("/liga/estado", obtenerEstadoLiga);

module.exports = router;
