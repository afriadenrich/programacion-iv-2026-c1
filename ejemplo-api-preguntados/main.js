const data = [
  {
    pregunta: "Como me llamo",
    respuesta: "agus",
    opciones: ["agus", "yo", "profe", "utn"],
  },
  {
    pregunta: "A",
    respuesta: "A",
    opciones: ["A", "B", "C", "D"],
  },
  {
    pregunta: "B",
    respuesta: "B",
    opciones: ["C", "D", "E", "F"],
  },
  {
    pregunta: "C",
    respuesta: "C",
    opciones: ["C", "D", "E", "F"],
  },
  {
    pregunta: "D",
    respuesta: "D",
    opciones: ["C", "D", "E", "F"],
  },
  {
    pregunta: "E",
    respuesta: "E",
    opciones: ["C", "D", "E", "F"],
  },
];

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(data[Math.floor(Math.random() * data.length)]);
});

app.listen(process.env.PORT || 3000);
