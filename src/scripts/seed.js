require("dotenv").config();
const mongoose = require("mongoose");
const Liga = require("../models/Liga");
const Superheroe = require("../models/Superheroe");

// Conectar a MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("Conectado a MongoDB Atlas");

    // Insertar Liga
    const insertarLiga = await Liga.create({
      nombre: "Guardianes de la Justicia",
      fecha: "2005-06-15",
      nombre_base: "Fortaleza Centella",
      ubicacion: "Ciudad Centilla",
      estatus: "Activa",
    });

    // Insertar superheroes
    const insertarSuperheroes = await Superheroe.insertMany([
      {
        nombre: "Voltaico",
        edad: 32,
        identidadSecreta: "Lucas Reynoso",
        poderes: ["Electrokinesis", "Vuelo", "Supervelocidad"],
      },
      {
        nombre: "Sombra Nocturna",
        edad: 28,
        identidadSecreta: "Elena Vázquez",
        poderes: ["Invisibilidad", "Supervision"],
      },
      {
        nombre: "Titan Espectral",
        edad: 40,
        identidadSecreta: "Dante Mercer",
        poderes: ["Regeneracion", "Espectro"],
      },
      {
        nombre: "Neon",
        edad: 22,
        identidadSecreta: "Dante Mercer",
        poderes: ["Hologramas", "Rayos X"],
      },
    ]);

    console.log("Datos insertados correctamente");
    mongoose.connection.close();
  })
  .catch((err) => console.error("Error conectando a MongoDB:", err));
