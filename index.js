const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hola mi server en Express");
});
app.get("/productos", (req, res) => {
    // res.send("Hola mi server en Express");
    res.json({
        name: "Productos 1",
        price: 10.99,
    })
});

app.get("/categories/:categoryId/products/:productId", (req, res) => {
    const { categoryId, productId } = req.params;
    res.json({
        categoryId,
        productId,
    })
});

app.listen(port, () => {
    console.log("My port: " + port);
});