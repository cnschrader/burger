const express = require("express");

const router = express.Router();

const burger = require("../models/burgers.js");

router.get("/", function (req, res) {
    console.log("we're inside the route")
    burger.selectAll(function (data) {
        var hbsObject = {
            burger: data
        };
        console.log('router', hbsObject);
        
          res.render("index", hbsObject);
    });
});


router.post("/", function (req, res) {
    burger.insertOne([req.body.burger_name, req.body.devoured], function (result) {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
    });
});

router.put("/:id", function (req, res) {
    burger.updateOne([req.params.id], function (result) {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
    });
});



module.exports = router;