const express = require("express");
var burger = require("./../models/burgers.js");

var router = express.Router();

router.get("/", function (req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function (req, res) {
  burger.selectAll(function (data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function (req, res) {
  burger.insertOne(req.body.burger, function (result) {
    res.json({ id: result.insertId });
  });
});

module.exports = router;