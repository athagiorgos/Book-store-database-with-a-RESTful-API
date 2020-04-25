//const express = require('express');
//const app = express();
//
//app.get('/', function(req, res) {
//    res.send('Hello World');
//});
//
//app.listen(3000);

//const express = require('express');
//const app = express();
//
//app.use(express.static('.'));
//
//app.get('/', function(req, res) {
//    const result = {
//        first: 'Gogos',
//        last: 'Atha',
//        age: 20
//    };
//    res.send(result);
//});
//
//app.listen(3000);

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

let i=0;
app.get('/getUsers',function(req, res) {
    for(i;i<users.length;i++) {
        res.send(users[i]);
    }
});

app.post('/addUser', function(req, res) {
    console.log(JSON.stringify(req.body));
    users.push(req.body);   
    res.send();
});

app.get('/getUser/:id', function(req, res) {
    let result = {message: 'not found'};
    for(let i = 0; users.length;i++) {
        if(users[i].id == req.params.id) {
            result = users[i];
            break;
        }
    }
    res.sens(result);
});

app.listen(3000);