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
  password: "root",
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
    res.send("Saved");
  });
});

// app.get('/getBooks', function(req, res) {
//   var query = 'select * from books';
//   con.query(query,[req.params.id], function(err, rows, fields) {
//     if(!err)
//     res.send(rows);
//     else
//     console.log(err);
//   })
// });

app.get('/getBooks/:title', function(req, res) {
  var query = 'select * from books where title = ?';
  con.query(query,[req.params.title], function(err, rows, fields) {
    if(!err)
    res.send(rows);
    else
    console.log(err);
  })
});

app.listen(3000);
