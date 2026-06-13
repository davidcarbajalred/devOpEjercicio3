//En el archivo app., implementa la sintaxis de servidor Express y 
//las rutas /books y /authors para la petición “get”.

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const booksRoutes = require("./routes/books");
const authorsRoutes = require("./routes/authors");

app.use("/books", booksRoutes);
app.use("/authors", authorsRoutes);

app.use((req, res) => {
    res.status(404).json({
        message: "Incorrect route or params",
    });
});

if (require.main === module) {
    app.listen(port, () => {
        console.log(`Servidor escuchando en http://localhost:${port}`);
    });
}

module.exports = app;