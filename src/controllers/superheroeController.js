const Superheroe = require("../models/Superheroe");

// Obtener todos los superheroes
const obtenerSuperheroes = async (req, res) => {
  try {
    const superheroes = await Superheroe.find();
    res.json(superheroes);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener superhéroes", error });
  }
};

// Obtener superheroe por nombre
const obtenerSuperheroePorNombre = async (req, res) => {
  try {
    const superheroe = await Superheroe.findOne({ nombre: req.params.nombre });
    if (!superheroe)
      return res.status(404).json({ mensaje: "Superhéroe no encontrado" });
    res.json(superheroe);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al buscar superhéroe", error });
  }
};

// Filtrar superheroes por poder
const obtenerSuperheroesPorPoder = async (req, res) => {
  try {
    const superheroes = await Superheroe.find({ poderes: req.params.poder });
    res.json(superheroes);
  } catch (error) {
    res
      .status(500)
      .json({ mensaje: "Error al filtrar superhéroes por poder", error });
  }
};

// Filtrar superheroes por edad
const obtenerSuperheroesPorEdad = async (req, res) => {
  try {
    const superheroes = await Superheroe.find({ edad: req.params.edad });
    res.json(superheroes);
  } catch (error) {
    res
      .status(500)
      .json({ mensaje: "Error al filtrar superhéroes por edad", error });
  }
};

module.exports = {
  obtenerSuperheroes,
  obtenerSuperheroePorNombre,
  obtenerSuperheroesPorPoder,
  obtenerSuperheroesPorEdad,
};
