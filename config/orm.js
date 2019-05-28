const connection = require("./connection.js");

const orm = {
    selectAll: function(tableInput, colToSearch, valOfCol) {
      const queryString = "SELECT * FROM ??";
      connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
        if (err) throw err;
        console.log(result);
      });
    },
    InsertOne: function(whatToSelect, table, orderCol) {
      const queryString = "INSERT INTO burger (?) value(?))";
      console.log(queryString);
      connection.query(queryString, [whatToSelect, table, orderCol], function(err, result) {
        if (err) throw err;
        console.log(result);
      });
    },
    updateOne: function(tableOneCol, tableTwoForeignKey, tableOne, tableTwo) {
      const queryString =
        "UPDATE ?? SET ?? WHERE ??";
      connection.query(
        queryString,
        [tableOneCol, tableOneCol, tableOne, tableTwo, tableTwo, tableTwoForeignKey, tableOne, tableOneCol],
        function(err, result) {
          if (err) throw err;
          console.log(result);
        }
      );
    }
  };
  
  module.exports = orm;
  