const express = require("express");
const app = express();
const routerApi = require('./routers');

const port = 3000;
const { faker } = require("@faker-js/faker");
app.get("/", (req, res) => {
    res.send("Hola mi server en Express");
});

app.use(express.json());

routerApi(app)






app.listen(port, () => {
    console.log("My port: " + port);
});