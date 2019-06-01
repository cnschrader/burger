var orm = require("../config/orm.js");

var burger = {
    selectAll: function(tableName, cb) {
        orm.selectAll(tableName, cb);
        cb(res);
      },
  // The variables cols and vals are arrays.
  insertOne: function(name, cb) {
    orm.insertOne("burgers", ["burger_name", "devoured"], [name, false], cb);
    cb(res);
  },
  updateOne: function(name, cb) {
    orm.updateOne("burgers", ["burger_name", "devoured"], [name, false], cb);
  },
};

// Export the database functions for the controller.
module.exports = burger;
