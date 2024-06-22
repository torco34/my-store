
const express = require("express");
// const { faker } = require("@faker-js/faker");
const router = express.Router();

router.get("/users", (req, res) => {
    const { limit, offset } = req.query;
    if (limit && offset) {
        res.json({
            limit,
            offset
        })
    } else {
        res.send("Debe especificar limit y offset");
    }

});

module.exports = router