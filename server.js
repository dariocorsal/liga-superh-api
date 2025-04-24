require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;

const superheroeRoutes = require("./src/routes/superheroeRoutes");
const ligaRoutes = require("./src/routes/ligaRoutes");

app.use("/superheroes", superheroeRoutes);
app.use("/liga", ligaRoutes);

app.use(cors());
app.use(express.json());

mongoose
  .connect(`127.0.0.1:27017/superheroes`)
  .then(() => console.log("Conectado a MongoDB Atlas"))
  .catch((err) => console.error("Error al conectar a MongoDB:", err));

app.get("/", (req, res) => {
  res.send("API corriendo correctamente");
});

app.listen(PORT, (error) => {
  if (!error) console.log(`Servidor corriendo en http://localhost:${PORT}`);
  else console.log("Error corriendo servidor: ", error);
});
