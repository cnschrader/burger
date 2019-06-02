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
    console.log(req.body);
    burger.insertOne([req.body.name], function (result) {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
    });
 
});

router.put("/:id", function (req, res) {
    burger.updateOne([req.body.name], req.params.id, function (result) {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
    });
    // res.send(req.params.id);
});



module.exports = router;