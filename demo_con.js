var mysql = require('mysql');

var con = mysql.createConnection({
  host: "127.0.0.1",
  port: 3306,
  user: "root",
  password: "mastertiger7",
  database:"book"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
