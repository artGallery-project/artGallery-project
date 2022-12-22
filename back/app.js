const express=require("express");
const app = express();
const errorMiddleware= require("./middleware/errors");
const cookieParser = require("cookie-parser");

//Uso de constantes importadas
app.use(express.json());
app.use(cookieParser());

//Importar rutas
const productos = require("./routes/products");
const usuarios = require("./routes/auth");
const ordenes = require('./routes/orders');

app.use('/api', productos); // Ruta del navegador
app.use('/api', usuarios);
app.use('/api', ordenes);

//Middleweres para manejar errores 
app.use(errorMiddleware)

module.exports = app