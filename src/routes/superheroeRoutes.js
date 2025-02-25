const express = require("express");
const router = express.Router();
const {
  obtenerSuperheroes,
  obtenerSuperheroePorNombre,
  obtenerSuperheroesPorPoder,
  obtenerSuperheroesPorEdad,
} = require("../controllers/superheroeController");

router.get("/", obtenerSuperheroes);
router.get("/:nombre", obtenerSuperheroePorNombre);
router.get("/poder/:poder", obtenerSuperheroesPorPoder);
router.get("/edad/:edad", obtenerSuperheroesPorEdad);

module.exports = router;
