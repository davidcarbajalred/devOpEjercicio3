//Crea en el archivo books.js del directorio routes un método “get”
//que devuelva un mensaje.

const express = require("express");
const app = express();
//const Books = requiere('../routes/books');

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Books",
  });
});

module.exports = app;
