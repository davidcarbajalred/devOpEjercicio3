//En el archivo app., implementa la sintaxis de servidor Express y 
//las rutas /books y /authors para la petición “get”.

const express = require('express');
const app = express();
const port = 3000;

const booksRoutes = require("./routes/books");
const authorsRoutes = require("./routes/authors");

app.use('/books', booksRoutes);
app.use('/authors', authorsRoutes);

app.use("/", (req, res) => {
  res.status(404).json({
     message: "Incorrect route or params" 
    });
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
