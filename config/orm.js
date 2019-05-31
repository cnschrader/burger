const connection = require("./connection.js");

const orm = {
    selectAll: function(tableName, cb) {
      const queryString = "SELECT * FROM ??";
      connection.query(queryString, [tableName], function(err, result) {
        if (err) throw err;
        console.log(result);
        cb(result);
      });
    },
    insertOne: function(cols, vals) {
      const queryString = "INSERT INTO burger (?) value(?))";
      console.log(queryString);
      connection.query(queryString, [cols, vals], function(err, result) {
        if (err) throw err;
        console.log(result);
      });
    },
    updateOne: function(tableName, cols, vals) {
      const queryString =
        "UPDATE ?? SET ?? WHERE ??";
      connection.query(
        queryString,
        [tableName, cols, vals],
        function(err, result) {
          if (err) throw err;
          console.log(result);
        }
      );
    }
  };
  
  module.exports = orm;
  