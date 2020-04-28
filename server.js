const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static('.'));
app.use(bodyParser.json());

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

app.post('/addBook', function(req, res) {
  console.log(JSON.stringify(req.body));
    var query = 'insert into books set ?';
    var createBook = {
      author: req.body.author,
      title: req.body.title,
      price: req.body.price,
      genre: req.body.genre
    }
    con.query(query, createBook, function(err, response) {
      if (err) {
        console.log("Failed to save to database");
      }
    //users.push(req.body);
    res.send("Saved");
  });
});

app.listen(3000);
