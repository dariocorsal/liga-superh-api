const mongoose = require("mongoose");

const SuperheroeSchema = new mongoose.Schema({
  nombre: { type: String, required: true, unique: true },
  edad: { type: Number, required: true },
  identidad_secreta: { type: String, required: true },
  poderes: { type: [String], required: true },
});

module.exports = mongoose.model("Superheroe", SuperheroeSchema);
