const mongoose = require("mongoose");

const LigaSchema = new mongoose.Schema({
  nombre: { type: String, required: true, unique: true },
  fecha: { type: String, required: true },
  nombre_base: { type: String, required: true },
  ubicacion: { type: String, required: true },
  estatus: { type: String, required: true },
});

module.exports = mongoose.model("Liga", LigaSchema);
