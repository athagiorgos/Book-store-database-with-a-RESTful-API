const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static('.'));
app.use(bodyParser.json());

const users = require('./users.js');

//const users = [{
//        id: 45,
//        fname: 'Gogos',
//        lname: 'Atha',
//        age: 20
//}];

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "127.0.0.1",
  port: 3306,
  user: "root",
  password: "mastertiger7",
  database:"users"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});


app.get('/getUsers',function(req, res) {

    // for(let i=0;i<users.length;i++) {
    //     res.send(users[i]);
    // }

    var query = 'select * from user';
    con.query(query, (err, result, fields) => {
      if (err) {
        res.send(err);
      }
      //return console.log(result);
      res.send(result);
})
});

// con.query(sql, function (err, result) {
//    if (err) throw err;
//    console.log("Result: " + result);


//WORKS !!!!!!!
app.post('/addUser', function(req, res) {
  //  console.log(JSON.stringify(req.body));
    var query = 'insert into user set ?';
    var createUser = {
      id: req.body.id,
      fname: req.body.fname,
      lname: req.body.lanme,
      age:req.body.age
    }
    con.query(query, createUser, function(err, response) {
      if (err) {
        console.log("Failed to save to database");
      }
    //users.push(req.body);
    res.send("Saved");
  });
});

// app.get('/getUser/:id', function(req, res) {
//     let result = {message: 'not found'};
//     for(let i = 0; users.length;i++) {
//         if(users[i].id == req.params.id) {
//             result = users[i];
//             break;
//         }
//     }
//     res.sens(result);
// });

app.listen(3000);
