// todo lo que sea especifico de ir  antes de lo que es dinamico
const express = require("express");

const router = express.Router();


const ProductsServer = require("../server/productServer");
const server = new ProductsServer();

router.get("/", (req, res) => {
    const products = server.find();
    res.json(products)


});


router.get("/filter", (req, res) => {
    res.send("Hola mi server en Express con filter");
});

router.get("/:id", (req, res) => {
    const { id } = req.params;
    const product = server.findOne(id);
    if (!product) {
        return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);

});

router.post("/", (req, res) => {

    const body = req.body;
    const productNew = server.create(body);
    res.status(201).json(productNew)
});

router.patch("/:id", (req, res) => {
    const { id } = req.body;
    const body = req.body;
    res.json({
        message: "crear",
        data: body,
        id,
    })
});
router.delete("/:id", (req, res) => {
    const { id } = req.body;

    res.json({
        message: "eleminar",

        id,
    })
});
module.exports = router;