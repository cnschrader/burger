var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    console.log("inside the orm")
    orm.selectAll("burgers", function(res) {
        console.log("inside the all")
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  updateOne: function(cols, vals, cb) {
    orm.updateOne("burgers", cols, vals, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
