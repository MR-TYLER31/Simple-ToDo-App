const express = require('express')
const app = express()
var bodyParser = require('body-parser');
const port = 3000

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
var todos = ['clean room', 'do dishes', 'code'];


app.get('/', function(req, res) {   
    res.render('home', {todos: todos});
});

app.post('/addtask', function(req, res) {
    var newTask = req.body.newtask;
    todos.push(newTask);
    res.redirect('/');
});




app.listen(port, () => console.log(`Example app listening on port ${port}!`));