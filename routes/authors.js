//Crea en el archivo authors.js del directorio routes un método “get”
//que devuelva un mensaje

const express = require("express");
const app = express();
//const Authors = require('./authors');

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Authors",
  });
});

module.exports = app;
