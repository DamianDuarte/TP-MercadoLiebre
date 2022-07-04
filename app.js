const express = require("express");
const path = require('path');
const app = express();
const port = 8080;

//! Recursos estáticos
app.use(express.static('public'));

//! Rutas

app.get("/", (req, res) => res.sendFile(path.join(__dirname, 'views', 'home.html'))); 

app.listen(port, () =>
{
    console.log("Servidor corriendo http://localhost:" + port);
});