const mongoose = require("mongoose");

const SuperheroeSchema = new mongoose.Schema({
  nombre: { type: String, required: true, unique: true },
  edad: { type: Number, required: true },
  identidadSecreta: { type: String, required: true },
  poderes: { type: [String], required: true },
});

module.exports = mongoose.model("Superheroe", SuperheroeSchema);
