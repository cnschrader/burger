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
  