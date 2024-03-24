const express = require("express");
const app = express();
const PUERTO = 8080;
const productsRouter = require("./routes/products.router");
const cartsRouter = require("./routes/carts.router");

app.use(express.json())
//Acá le digo a express que voy a recibir datos en formato JSON.

//Rutas
app.use("/api/products", productsRouter);
app.use("/api/carts", cartsRouter);

//Listen:

app.listen(PUERTO, () => {
    console.log(`Escuchando en el puerto: ${PUERTO}`);
})


