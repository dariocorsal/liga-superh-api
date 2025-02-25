const Liga = require("../models/Liga");

// Obtener info de liga
const obtenerLiga = async (req, res) => {
  try {
    const liga = await Liga.findOne(); // Suponiendo que solo hay una liga
    if (!liga) {
      return res.status(404).json({ mensaje: "Liga no encontrada" });
    }
    res.json(liga);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener la liga", error });
  }
};

// Obtener estado de liga
const obtenerEstadoLiga = async (req, res) => {
  try {
    const liga = await Liga.findOne();
    if (!liga) {
      return res.status(404).json({ mensaje: "Liga no encontrada" });
    }
    res.json({ estado: liga.activa ? "Activa" : "Inactiva" });
  } catch (error) {
    res
      .status(500)
      .json({ mensaje: "Error al obtener el estado de la liga", error });
  }
};

module.exports = {
  obtenerLiga,
  obtenerEstadoLiga,
};
