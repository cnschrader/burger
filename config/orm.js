const connection = require("./connection.js");

const orm = {
selectAll: function(tableName, cb) {
  var queryString = `SELECT * FROM ${tableName}`;

  function printQuestionMarks(num) {
    var arr = [];

    for (let i = 0; i < num; i++) {
      arr.push("?");
    }

    return arr.toString();
  }

  console.log(queryString);

  connection.query(queryString, vals, function(err, result) {
    if (err) {
      throw err;
    }
    cb(result);
  });
},

updateOne: function(table, cols, vals, cb) {
  var queryString = `UPDATE ${table} SET (${cols.toString()}) VALUES (${printQuestionMarks(vals.length)})`;

  function printQuestionMarks(num) {
    var arr = [];

    for (let i = 0; i < num; i++) {
      arr.push("?");
    }

    return arr.toString();
  }

  console.log(queryString);

  connection.query(queryString, vals, function(err, result) {
    if (err) {
      throw err;
    }
    cb(result);
  });
},
  

insertOne: function(table, cols, vals, cb) {
  var queryString = `INSERT INTO ${table} (${cols.toString()}) VALUES (${printQuestionMarks(vals.length)})`;

  function printQuestionMarks(num) {
    var arr = [];

    for (let i = 0; i < num; i++) {
      arr.push("?");
    }

    return arr.toString();
  }

  console.log(queryString);

  connection.query(queryString, vals, function(err, result) {
    if (err) {
      throw err;
    }
    cb(result);
  });
},

}
  module.exports = orm;
  