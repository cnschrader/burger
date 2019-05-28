const express = require("express");

const router = express.Router();

const burger = require("models/burgers.js");

router.get("/", function(req, res) {
    cat.all(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });
  

  router.post("/", function(req, res) {
    burger.create(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });
  