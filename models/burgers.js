var orm = require("../config/orm.js");

var burger = {
    selectAll: function( cb) {
        orm.selectAll('burgers', function(result){

            cb(result);
        });
      },
  // The variables cols and vals are arrays.
  insertOne: function(name, cb) {
    orm.insertOne("burgers", ["burger_name"], [name], function(result){
        cb(result)
    });
    
  },
  updateOne: function(name, burgerId, cb) {
    orm.updateOne("burgers", ["devouered"], [1], burgerId, function(result){
        cb(result);
    });
  },
};

// Export the database functions for the controller.
module.exports = burger;
