// PREPARAR EXPRESS PARA SU USO
const express = require("express");
const app = express();

// ACTIVAR VARIABLES DE ENTORNO
require("dotenv").config();

// ACTIVAR LA CARPETA PUBLICA DEL PROYECTO
app.use(express.static("public"));

//ESTABLECER VISTAS
app.set("views", __dirname + "/views");

// INDICAR EL TEMPLATE A UTILIZAR
app.set("view engine", "hbs");

// ESTABLECER RUTAS
app.use("/", require("./routes/index"));

// ESTABLECER SERVIDOR
app.listen(process.env.PORT, () => {
    console.log("Servidor activo");
}) 