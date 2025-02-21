const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT;

app.use(cors());

app.get("/", (req, res) => {
  res.send("API corriendo correctamente");
});

app.listen(PORT, (error) => {
  if (!error)
    console.log("Servidor corriendo en puerto http://localhost:${PORT}");
  else console.log("Error corriendo servidor: ", error);
});
